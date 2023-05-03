import express from 'express';
const router = express.Router();

import {crearDocumento, mostrarDocumento, actualizarDocumento, InactivarDocumento, BuscarDocumento} from '../Controllers/DocumentoController.js';

router.post('/', crearDocumento);
router.get('/mostrar/:id', mostrarDocumento);
router.put('/:id', actualizarDocumento);
router.delete('/:id', InactivarDocumento);
router.get('/:id', BuscarDocumento);


export default router;
