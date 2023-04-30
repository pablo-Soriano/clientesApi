//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const DireccionesModel = db.define('direcciones', {
    Departamento: {type:DataTypes.STRING},
    Municipio: {type:DataTypes.STRING},
    Direccion: {type:DataTypes.STRING},
    Estado: {type:DataTypes.NUMBER}
})

export default DireccionesModel