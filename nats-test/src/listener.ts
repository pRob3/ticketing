import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from './events/ticket-created-listener';

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

  new TicketCreatedListener(stan).listen();
});

// Interrupt the process
process.on('SIGINT', () => stan.close());
// Terminate the process
process.on('SIGTERM', () => stan.close());
// nodemon
process.on('SIGUSR2', () => stan.close());
