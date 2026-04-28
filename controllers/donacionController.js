const Donacion = require('../models/Donacion');

// Función para guardar una nueva donación
exports.crearDonacion = async (req, res) => {
    try {
        // Obtenemos los datos del cuerpo de la petición (lo que enviará React después)
        const { tipoDonante, nombreDonante, recurso, cantidad, unidadMedida } = req.body;

        // Utilizamos Sequelize para insertar el registro en PostgreSQL
        const nuevaDonacion = await Donacion.create({
            tipoDonante,
            nombreDonante,
            recurso,
            cantidad,
            unidadMedida
        });

        // Devolvemos una respuesta exitosa
        res.status(201).json({
            status: 'success',
            message: 'Donación registrada exitosamente',
            data: nuevaDonacion
        });
    } catch (error) {
        console.error('Error al crear donación:', error);
        res.status(500).json({ 
            status: 'error', 
            message: 'Error al registrar la donación en la base de datos' 
        });
    }
};

// Función para listar todas las donaciones
exports.obtenerDonaciones = async (req, res) => {
    try {
        const donaciones = await Donacion.findAll();
        res.status(200).json({
            status: 'success',
            data: donaciones
        });
    } catch (error) {
        console.error('Error al obtener donaciones:', error);
        res.status(500).json({ 
            status: 'error', 
            message: 'Error al consultar la base de datos' 
        });
    }
};