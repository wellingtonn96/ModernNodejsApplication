import request from 'supertest';
import app from '../../src/server';

describe('suite de test para manipulação de usuarios', () => {
  it('deve cadasdtrar um usuario', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });

  it('deve cadasdtrar usuarios', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'wellington',
        email:'weltossousa@gmail.com'
      })

    console.log(response.body)
    expect(response.statusCode).toBe(200);
  });

  it('deve cadasdtrar endereços', async () => {
    const response = await request(app)
      .post('/addresses/1')
      .send({
        zipcode: '08390-541',
        street: 'Rua São Jorge',
        number: 123
      })

    console.log(response.body)
    expect(response.statusCode).toBe(200);
  });

  it('deve listar o endereço que pertence a um user', async () => {
    const response = await request(app)
      .get('/addresses/1');

    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  it.only('deve criar uma technologia', async () => {
    const response = await request(app)
      .post('/techs/1')
      .send({
        name: "Node.js"
      })

    console.log(response.body)
    expect(response.statusCode).toBe(200);
  });

});
