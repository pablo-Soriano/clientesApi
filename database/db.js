import {Sequelize} from "sequelize";

const db = new Sequelize('clientes', 'psoriano', 'Inf0rmat1ca', {
    host:'172.16.20.114',
    dialect:'mysql'
})

export default db