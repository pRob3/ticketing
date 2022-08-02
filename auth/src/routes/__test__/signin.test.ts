import request from 'supertest';
import { app } from '../../app';

it('returns a 400 with a invalid email', async () => {
  return request(app)
    .post('/api/users/signin')
    .send({
      email: 'testtest.com',
      password: 'password',
    })
    .expect(400);
});

it('returns a 400 with a invalid password', async () => {
  return request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: '',
    })
    .expect(400);
});

it('fails when an email that not exists is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'incorrect',
    })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
