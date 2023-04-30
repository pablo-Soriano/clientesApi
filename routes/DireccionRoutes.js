import express from 'express';
import { guardarDireccion, actualizarDireccion, mostrarDirecciones, InactivarDireccion, buscarDireccion } from '../Controllers/DireccionController.js';


const router = express.Router();

router.post('/', guardarDireccion);
router.put('/:id', actualizarDireccion);
router.get('/mostrar/:id', mostrarDirecciones); // muestra direcciones por id de cliente
router.delete('/:id', InactivarDireccion);
router.get('/:id', buscarDireccion);


export default router