//Importamos la Conexion a la BD
import db from "../database/db.js";
import {QueryTypes} from "sequelize";

import DireccionesModel from '../models/DireccionesModel.js';
import DireccionesClienteModel from "../models/DireccionesClienteModel.js";


/* Guardar un Direccion */
export const guardarDireccion = async (req, res) => {
    try {
        const ultimaDireccionID = await DireccionesModel.create(req.body)
        await DireccionesClienteModel.create({
            idClientes: parseInt(req.body.idCliente),
            idDirecciones: ultimaDireccionID.id
        });
        res.json({'message':`Registro Creado Correctamente!!!`})
    }catch (error) {
        res.json( {message: error.message} )
    }
}


/* Actualizar una Direccion */
export const actualizarDireccion = async (req, res) => {
    try {
        await DireccionesModel.update(req.body, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Actualizado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Mostrar las direcciones de cada cliente */
export const mostrarDirecciones = async (req, res) => {
    try {
        const direcciones = await db.query(`SELECT d.id, d.Municipio, d.Departamento, d.Direccion FROM direcciones d INNER JOIN direccionesclientes cd ON d.id = cd.idDirecciones WHERE d.Estado = 1 AND cd.idClientes = ${req.params.id}`, { type: QueryTypes.SELECT })
        res.json(direcciones)
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Inactivar una direccion */
export const InactivarDireccion = async (req, res) => {
    try {
        await DireccionesModel.update({Estado:0}, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Eliminado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}


// busqueda de Direccion
export const buscarDireccion = async (req, res) => {
    try {
        const direccion = await DireccionesModel.findByPk(req.params.id)
        res.json(direccion);
    } catch (error) {
        res.json( {'message': error.message})
    }
}
