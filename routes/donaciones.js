const express = require('express');
const router = express.Router();
const donacionController = require('../controllers/donacionController');

// Ruta POST para crear una donación
router.post('/', donacionController.crearDonacion);

// Ruta GET para obtener todas las donaciones
router.get('/', donacionController.obtenerDonaciones);

module.exports = router;