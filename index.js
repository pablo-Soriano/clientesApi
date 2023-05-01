import express from 'express';
import  clientesRoutes from './routes/ClienteRoutes.js';
import direccionRoutes from './routes/DireccionRoutes.js';
import documentoRoutes from './routes/DocumentoRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

//importamos la conexion a la BD
import db from "./database/db.js";


// crear la app
const app = express();
app.use(cors());
app.use(express.json())
//Habilitar lectura de datos de formularios
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/clientes', clientesRoutes);
app.use('/direcciones', direccionRoutes);
app.use('/documentos', documentoRoutes);


try {
    await db.authenticate()
}catch (error) {
    console.log(`Error en Conexion: ${error}`)
}


app.get('/', (req, res)=>{
    res.send('Bienvenido a la API...')
})




// Definir puerto
const port = 2000;
app.listen(port, () =>{
    console.log(`Servidor ejecutando en http://localhost:${port}`)
});