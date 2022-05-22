import { Router } from 'express'
import { CreateTravelController } from '../controllers/CreateTravelController'
import { DeleteTravelController } from '../controllers/DeleteTravelController'
import { GetAllTravelController } from '../controllers/GetAllTravelController'
import { GetTravelByIdController } from '../controllers/GetTravelByIdController'
import { UpdateTravelController } from '../controllers/UpdateTravelController'
import { checksTravel } from '../middleware/checksTravel'

const routerTravel = Router()

routerTravel.post('/viagem', checksTravel, CreateTravelController)
routerTravel.put('/viagem/:id', UpdateTravelController)
routerTravel.delete('/viagem/:id', DeleteTravelController)
routerTravel.get('/viagem', GetAllTravelController)
routerTravel.get('/viagem/:id', GetTravelByIdController)

export default routerTravel