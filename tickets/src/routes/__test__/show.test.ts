import request from 'supertest';
import { app } from '../../app';

it('returns a 404 if a ticket is not found', async () => {
  await request(app).get('/api/tickets/invalid-id').send().expect(404);
});

it('returns the ticket if the ticket is found', async () => {
  const title = 'Slafhas';
  const price = 69;

  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.getAuthCookie())
    .send({
      title,
      price,
    })
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});
