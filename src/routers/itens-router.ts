import express from 'express'

let id: number | string = 0;

const itensRouter = express.Router();

itensRouter.post('/itens', (req, res) => {
    res.send('Cria novo item')
})

itensRouter.get('/itens', (req, res) => {
    res.send('Lê todos os itens')
})

itensRouter.get('/itens/:id', (req, res) => {
    id = req.params.id
    res.send(`Lê apenas o id ${id}`)
})

itensRouter.put('/itens/:id', (req, res) => {
    id: req.params.id
    res.send(`Atualiza apenas o id ${id}`)
})

itensRouter.delete('/itens/:id', (req, res) => {
    id: req.params.id
    res.send(`Deleta apenas o id ${id}`)
})

export default itensRouter