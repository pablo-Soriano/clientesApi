import express from 'express';
import { buscarCliente, mostrarClientes, nuevoCliente, actualizaCliente, InactivarCliente } from '../Controllers/ClienteController.js';
const router = express.Router();


router.get('/', mostrarClientes);
router.get('/:id', buscarCliente);
router.post('/', nuevoCliente);
router.put('/:id', actualizaCliente);
router.delete('/:id', InactivarCliente)


export default router