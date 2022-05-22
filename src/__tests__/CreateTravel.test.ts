import request from 'supertest'
import { app } from '../app'

describe('Travel', () => {
  test('should be able to create a new Travel', () => {
    request(app).post('/viagem').send({
        pilotName: "Luke Skywalker",
        copilotName: "Owen Lars",
        originName: "Tatooine",
        destinationName: "Alderaan",
        starshipName: "CR90 corvette"
    }).then(response => {
      expect(response.status).toBe(201)
    })
  })
})