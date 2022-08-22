import { Subjects, Publisher, ExpirationCompleteEvent } from '@slafhas/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
