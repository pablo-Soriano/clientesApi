import db from "../database/db.js";
import {QueryTypes} from "sequelize";

import DocumentoModel from "../models/DocumentoModel.js";
import DocumentosClienteModel from "../models/DocumentosClienteModel.js";

// crear Documentos
export const crearDocumento = async (req, res) => {
    try {
        //console.log(req.body);
        const actualdocumento = await DocumentoModel.create(req.body);
        await DocumentosClienteModel.create({
            idClientes: parseInt(req.body.idCliente),
            idDocumentos: actualdocumento.id
        });
        res.json({'message':`Registro Creado Correctamente!!! ${actualdocumento.id}`});
    } catch (error) {
        res.json({'message': error.message})
    }
}

// mostrar Documentos por cliente
export const mostrarDocumento = async (req, res) => {
    try {
        const direcciones = await db.query(`SELECT d.id, d.Nombredocumento, d.numero FROM documentos d INNER JOIN documentosclientes dc ON d.id = dc.idDocumentos WHERE d.Estado = 1 AND dc.idClientes = ${req.params.id}`, { type: QueryTypes.SELECT })
        res.json(direcciones)
    }catch (error) {
        res.json( {message: error.message} )
    }
}

//editar documentos
export const actualizarDocumento = async (req, res) => {
    try {
        await DocumentoModel.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({'message':'Registro Actualizado Correctamente!!!'})
    } catch (error) {
        res.json({'message': error.message});
    }
}

/* Inactivar Documento */
export const InactivarDocumento = async (req, res) => {
    try {
        await DocumentoModel.update({Estado:0}, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Eliminado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}


// busca un documento por ID
export const BuscarDocumento = async (req, res) => {
    try {
        const documento = await DocumentoModel.findByPk(req.params.id);
        res.json(documento);
    } catch (error) {
        res.json( {message: error.message} );
    }
}