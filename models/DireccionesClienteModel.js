//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const DireccionesClienteModel = db.define('direccionesclientes', {
    idClientes: {type:DataTypes.NUMBER},
    idDirecciones: {type:DataTypes.NUMBER}
})

export default DireccionesClienteModel