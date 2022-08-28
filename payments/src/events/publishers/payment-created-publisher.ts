import { Subjects, Publisher, PaymentCreatedEvent } from '@slafhas/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
