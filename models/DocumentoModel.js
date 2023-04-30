//importamos la conexion a la bd
import db from '../database/db.js';

//importamos sequelize
import { DataTypes } from "sequelize";

const DocumentoModel = db.define('documentos', {
    Nombredocumento: {type:DataTypes.STRING},
    numero: {type:DataTypes.STRING},
    Estado: {type:DataTypes.NUMBER}
})

export default DocumentoModel