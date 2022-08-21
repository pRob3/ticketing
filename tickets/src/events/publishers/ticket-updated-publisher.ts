import { Publisher, Subjects, TicketUpdatedEvent } from '@slafhas/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
