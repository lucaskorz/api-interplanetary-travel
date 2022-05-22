import { app } from "./app"

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

app.listen(PORT, () => {
    console.log(`Servidor rodando! URL: ${HOSTNAME}:${PORT}`)
})