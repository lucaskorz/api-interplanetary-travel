import { DataSource } from "typeorm"

var path = require('path');
const migrations = path.resolve(__dirname, '.', 'migrations', '*.ts')
const model = path.resolve(__dirname, '.', 'model', '*.ts')

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "postgres",
    entities: [model],
    migrations: [migrations]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data source rodando liso")
    })
    .catch((err) => {
        console.error("Erro ao inicializar data source!", err)
    })