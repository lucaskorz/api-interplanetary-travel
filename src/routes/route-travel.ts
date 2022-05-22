import { Router } from 'express'
import { CreateTravelController } from '../controllers/CreateTravelController'
import { DeleteTravelController } from '../controllers/DeleteTravelController'
import { GetAllTravelController } from '../controllers/GetAllTravelController'
import { GetTravelByIdController } from '../controllers/GetTravelByIdController'
import { UpdateTravelController } from '../controllers/UpdateTravelController'
import { checksTravel } from '../middleware/checksTravel'

const routerTravel = Router()

// Rotas pra manutenção, criação e consulta de viagens
routerTravel.post('/viagem', checksTravel, CreateTravelController)
routerTravel.put('/viagem/:id', UpdateTravelController)
routerTravel.delete('/viagem/:id', DeleteTravelController)
routerTravel.get('/viagem', GetAllTravelController)
routerTravel.get('/viagem/:id', GetTravelByIdController)

import fetch from 'node-fetch';

// Rotas pra consulta de personagens, naves, planetas e espécies
const url: string = 'https://swapi.dev/api/'
routerTravel.get('/personagens', async (req, res) => {
  await fetch(url+'people')
  .then((resp) => resp.json())
  .then(function(data: any) {
    return res.status(201).json(data.results)
  })
})

routerTravel.get('/planetas', async (req, res) => {
  await fetch(url+'planets')
  .then((resp) => resp.json())
  .then(function(data: any) {
    return res.status(201).json(data.results)
  })
})

routerTravel.get('/naves', async (req, res) => {
  await fetch(url+'starships')
  .then((resp) => resp.json())
  .then(function(data: any) {
  return res.status(201).json(data.results)
  })
})

routerTravel.get('/especies', async (req, res) => {
  await fetch(url+'species')
  .then((resp) => resp.json())
  .then(function(data: any) {
    return res.status(201).json(data.results)
  })
})

export default routerTravel;