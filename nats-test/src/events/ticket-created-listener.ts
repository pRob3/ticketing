import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';

export class TicketCreatedListener extends Listener {
  subject = 'ticket:created';
  queueGroupName = 'payments-service';

  onMessage(data: any, msg: Message) {
    console.log('Event data:', data);

    setTimeout(() => {
      console.log(`Finished processing ticket: ${data.id}`);
      msg.ack();
    }, 1000);
  }
}
