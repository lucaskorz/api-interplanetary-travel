import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import routerTravel from './routers/router-travel'

// Porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Endpoint raiz
app.get('/', (req, res) => {
    res.send(`Aplicação rodando na porta ${PORT}`)
})

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Rotas
app.use('/', routerTravel)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.send('Rota desconhecida!')
    res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})