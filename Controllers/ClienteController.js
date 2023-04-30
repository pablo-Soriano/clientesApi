import ClienteModel from "../models/ClienteModel.js";


// muestra todos los clientes
export const mostrarClientes = async (req, res) => {
    try{
        const cliente = await ClienteModel.findAll({
            where: { Estado:1 }
        })
        res.json(cliente)
    }catch (error){
        res.json( {message: error.message} )
    }
}

// muestra un cliente por su Id
export const buscarCliente = async (req, res) => {
    try{
        const cliente = await ClienteModel.findByPk(req.params.id)
        res.json(cliente)
    }catch (error){
        res.json( {message: error.message} )
    }
}

/* Crear un Cliente */
export const nuevoCliente = async (req, res) => {
    
    try {
        const result = await ClienteModel.create(req.body);
        res.json({'message':`Registro Creado Correctamente!!! ${result.id}`})
    }catch (error) {
        res.json( {message: error.message} )
    }
}


/* Actualizar un Cliente */
export const actualizaCliente = async (req, res) => {
    try {
        await ClienteModel.update(req.body, {
            where: {id:req.params.id }
        });
        res.json({'message':'Registro Actualizado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}

/* Inactivar Direccion */
export const InactivarCliente = async (req, res) => {
    try {
        await ClienteModel.update({Estado:0}, {
            where: {id:req.params.id }
        })
        res.json({'message':'Registro Eliminado Correctamente!!!'})
    }catch (error) {
        res.json( {message: error.message} )
    }
}
