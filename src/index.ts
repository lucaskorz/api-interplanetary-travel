import "reflect-metadata"
import "./db/dataSource"
import express from 'express'
import cors from 'cors'
import routerTravel from './routes/route-travel'

const PORT = process.env.PORT || 4000

const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`Aplicação rodando na porta ${PORT}`)
})

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/', routerTravel)

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada!' })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando! URL: ${HOSTNAME}:${PORT}`)
})