import { Publisher, Subjects, TicketUpdatedEvent } from '@slafhas/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
