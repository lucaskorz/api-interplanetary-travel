import { DataSource } from "typeorm"

var path = require('path');

const migrations = path.resolve(__dirname, '.', 'migrations', '*.ts')
const entities = path.resolve(__dirname, '.', 'entities', '*.ts')

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "postgres",
    entities: [entities],
    migrations: [migrations]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data source rodando liso")
    })
    .catch((err) => {
        console.error("Erro ao inicializar data source", err)
    })