import request from 'supertest'
import { app } from '../app'

describe('Travel', () => {
  test('should be able to create a new Travel', () => {
    request(app).put('/viagem/ac64dd9d-d4f1-4385-88c7-3948d96d33ef').send({
        pilotName: "teste1",
    }).then(response => {
      expect(response.status).toBe(201)
    })
  })
})