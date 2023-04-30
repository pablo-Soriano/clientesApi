//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const DocumentosClienteModel = db.define('documentosclientes', {
    idClientes: {type:DataTypes.NUMBER},
    idDocumentos: {type:DataTypes.NUMBER}
})

export default DocumentosClienteModel