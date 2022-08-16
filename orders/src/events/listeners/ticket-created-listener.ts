import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketCreatedEvent } from '@slafhas/common';
import { Ticket } from '../../models/ticket';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = 'orders-service';
  async onMessage(data: TicketCreatedEvent['data'], msg: Message) {}
}
