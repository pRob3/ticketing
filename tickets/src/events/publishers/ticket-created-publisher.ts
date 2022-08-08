import { Publisher, Subjects, TicketCreatedEvent } from '@slafhas/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
