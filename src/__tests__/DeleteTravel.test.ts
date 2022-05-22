import request from 'supertest'
import { app } from '../app'

describe('Travel', () => {
  test('should be able to create a new Travel', () => {
    request(app).delete('/viagem/b00f831e-40ef-4635-ab77-63006d81ad4e')
    .then(response => {
      expect(response.status).toBe(201)
    })
  })
})