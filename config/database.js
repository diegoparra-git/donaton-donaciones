const { Sequelize } = require('sequelize');

// Instanciamos Sequelize pasándole directamente la URL completa de Neon
const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false, // Apaga los logs de SQL en la terminal
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Evita errores de certificados con proveedores Cloud como Neon
        }
    }
});

module.exports = sequelize;