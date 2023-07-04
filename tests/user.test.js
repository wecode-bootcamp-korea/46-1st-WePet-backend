import request from 'supertest'
import { createApp } from '../app.js'
import { database } from '../models/dataSource.js'

describe('Sign Up', () => {
  let app

  beforeAll(async () => {
    app = createApp()
    await database.initialize()
  })

  afterAll(async () => {
    await database.query(`TRUNCATE users`)
    await database.destroy()
  })

  test('FAILED: invalid email', async () => {
    await request(app)
      .post('/users/signup')
      .send({ email: 'wrongEmail', password: 'password001@', name: 'batman' })
      .expect(400)
      .expect({ message: 'DUPLICATE_EMAIL' })
  })

  test('SUCCESS: created user', async () => {
    await request(app)
      .post('/users/signup')
      .send({
        email: 'wecode001@gmail.com',
        password: 'password001@',
        name: 'batman',
      })
      .expect(201)
  })

  test('FAILED: duplicated email', async () => {
    await request(app)
      .post('/users/signup')
      .send({
        email: 'wecode001@gmail.com',
        password: 'password001@',
        name: 'batman',
      })
      .expect(409)
      .expect({ message: 'DUPLICATE_EMAIL' })
  })
})
