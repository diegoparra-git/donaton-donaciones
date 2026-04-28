const donacionRepository = require('../repositories/donacionRepository');

// Función para guardar una nueva donación
exports.crearDonacion = async (req, res) => {
    try {
        // llama a la función crear del repositorio.
        const nuevaDonacion = await donacionRepository.crear(req.body);

        res.status(201).json({
            status: 'success',
            data: nuevaDonacion
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Error interno' });
    }
};

// Función para obtener todas las donaciones
exports.obtenerDonaciones = async (req, res) => {
    try {
        const donaciones = await donacionRepository.obtenerTodas();
        res.status(200).json({ status: 'success', data: donaciones });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Error interno' });
    }
};