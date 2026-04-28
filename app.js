require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const app = express();
// Usa el puerto del .env, o el 3001 por defecto
const PORT = process.env.PORT || 3001;

// 1. Middlewares de Programación Defensiva
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(express.json()); // Permite recibir JSON en el body de las peticiones
app.use(express.urlencoded({ extended: true }));

// 2. Ruta de prueba (Health Check)
// Esta ruta nos servirá para confirmar que el API Gateway se comunica con este microservicio
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'success',
        message: 'Microservicio de Donaciones funcionando correctamente' 
    });
});

// Aquí agregaremos las rutas de Sequelize y la BD más adelante

// 3. Levantar el servidor
app.listen(PORT, () => {
    console.log(`✅ Microservicio de Donaciones escuchando en el puerto ${PORT}`);
});
