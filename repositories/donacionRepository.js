// repositories/donacionRepository.js
const Donacion = require('../models/Donacion');

class DonacionRepository {
    // Aquí encapsulamos todas las consultas a la base de datos
    async crear(datosDonacion) {
        return await Donacion.create(datosDonacion);
    }

    async obtenerTodas() {
        return await Donacion.findAll();
    }

    async obtenerPorId(id) {
        return await Donacion.findByPk(id);
    }
}

module.exports = new DonacionRepository();