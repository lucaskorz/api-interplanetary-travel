import  { Router } from 'express'

// importa os controllers aqui, e o controller irá chamar ao typeORM pra fazer a chamada no postgres

let id: number = 0;
const routerTravel = Router();

routerTravel.post('/viagem', (req, res) => {
    res.send('Cria nova Viagem')
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