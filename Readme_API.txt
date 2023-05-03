Generales del proyecto API Clientes:
al descargar el proyecto ejecutar el comando: npm install

Proyecto creado en MySql
*** Crear DB  ******
el archivo query_BD_tablas.sql contiene el query para crear BD y tablas.

Para Iniciar el servidor Api, ejecute el siguiente comando:
npm start

el servidor corre en la ruta: http://localhost:2000

Endopoints Clientes:

Las rutas para clientes son:
Metodo: GET  - http://localhost:2000/clientes  - muestra todos los clientes cuyo estado es 1, (activo) - router.get('/', mostrarClientes);
Metodo: GET  - http://localhost:2000/clientes/:id - muestra informacion de un cliente (busca un cliente) , segun Id especificado. - router.get('/:id', buscarCliente);
Metodo: POST  - http://localhost:2000/clientes -  Inserta un nuevo cliente en BD - router.post('/', nuevoCliente);
Metodo: PUT  - http://localhost:2000/clientes/:id - Actualiza un cliente, segun el Id de cliente especificado - router.put('/:id', actualizaCliente);
Metodo: DELETE  - http://localhost:2000/clientes/:id - Cambia estado al cliente especificado por su Id. - router.delete('/:id', InactivarCliente)
** no se recomienda borrar informacion en BD, se sugiere un cambio de estado.

Las rutas para documentos son:
Metodo: GET  - http://localhost:2000/documentos/mostrar/:idCliente  - muestra todos los documentos cuyo estado es 1, (activo), del cliente especificado - router.get('/mostrar/:idCliente', mostrarDocumento);
Metodo: GET  - http://localhost:2000/documentos/:id - muestra informacion de un documento (busca un documento) , segun IdDocumento especificado. - router.get('/:id', BuscarDocumento);
Metodo: POST  - http://localhost:2000/documentos -  Inserta un nuevo documento en BD, especificando IdCliente (en el body, al probarlo en postman) - router.post('/', crearDocumento);
Metodo: PUT  - http://localhost:2000/documentos/:id - Actualiza un documento, segun el Id de documento especificado - router.put('/:id', actualizarDocumento);
Metodo: DELETE  - http://localhost:2000/documentos/:id - Cambia estado al documento especificado por su Id. - router.delete('/:id', InactivarDocumento);
** no se recomienda borrar informacion en BD, se sugiere un cambio de estado.

Las rutas para direcciones son:
Metodo: GET  - http://localhost:2000/direcciones/mostrar/:idCliente  - muestra todos las direcciones cuyo estado es 1, (activo), del Idcliente especificado - router.get('/mostrar/:id', mostrarDirecciones)
Metodo: GET  - http://localhost:2000/direcciones/:id - muestra informacion de una direccion (busca una direccion) , segun IdDireccion especificado. - router.get('/:id', buscarDireccion)
Metodo: POST  - http://localhost:2000/direcciones -  Inserta una nueva direccion en BD, especificando IdCliente (en el body, al probarlo en postman) - router.post('/', guardarDireccion)
Metodo: PUT  - http://localhost:2000/direcciones/:id - Actualiza una direccion, segun el Id de direccion especificado - router.put('/:id', actualizarDireccion)
Metodo: DELETE  - http://localhost:2000/direcciones/:id - Cambia estado a la direccion especificada por su Id. - router.delete('/:id', InactivarDireccion);
** no se recomienda borrar informacion en BD, se sugiere un cambio de estado.










