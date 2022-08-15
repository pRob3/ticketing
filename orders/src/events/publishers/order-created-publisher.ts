import { Publisher, OrderCreatedEvent, Subjects } from '@slafhas/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
