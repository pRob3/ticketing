import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

const clientId = randomBytes(4).toString('hex');

console.clear();

const stan = nats.connect('ticketing', clientId, {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log(`Listener #${clientId} connected to NATS`);

  stan.on('close', () => {
    console.log('NATS connection closed');
    process.exit();
  });

  const options = stan.subscriptionOptions().setManualAckMode(true);

  const subscription = stan.subscribe(
    'ticket:created',
    'orders-service-queue-group',
    options
  );

  subscription.on('message', (msg: Message) => {
    const data = msg.getData();

    if (typeof data === 'string') {
      console.log(`Received event: #${msg.getSequence()}, with data: ${data}`);
    }

    msg.ack();
  });
});

// Interrupt the process
process.on('SIGINT', () => stan.close());
// Terminate the process
process.on('SIGTERM', () => stan.close());
// nodemon
process.on('SIGUSR2', () => stan.close());
