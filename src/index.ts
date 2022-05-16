import express from 'express'
import cors from 'cors'
import itensRouter from './routers/itens-router'

// Porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// Endpoint raiz
app.get('/', (req, res) => {
    res.send(`Aplicação rodando na porta ${PORT}`)
})

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Rotas
app.use('/', itensRouter)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.send('Rota desconhecida!')
    res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})