import  { Router } from 'express'
import { CreateTravelController } from '../controllers/CreateTravelController'

let id: number = 0;
const routerTravel = Router();

// Rota Principal
routerTravel.post('/viagem', (req, res) => {
    const body = req.body;
    
    CreateTravelController(body);

    res.send(res.json)
})

routerTravel.get('/viagens', (req, res) => {
    res.send('Lê todas as viagens')
})

routerTravel.get('/viagem/:id', (req, res) => {
    id = +req.params.id
    res.send(`Lê apenas o id ${id}`)
})

routerTravel.put('/viagem/:id', (req, res) => {
    id = +req.params.id
    res.send(`Atualiza apenas o id ${id}`)
})

routerTravel.delete('/viagem/:id', (req, res) => {
    id = +req.params.id
    res.send(`Deleta apenas o id ${id}`)
})

export default routerTravel