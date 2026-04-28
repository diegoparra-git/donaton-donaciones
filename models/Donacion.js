const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Donacion = sequelize.define('Donacion', {
    id: { 
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true 
    },
    tipoDonante: { 
        type: DataTypes.ENUM('Individual', 'Empresarial'), 
        allowNull: false 
    },
    nombreDonante: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    recurso: { 
        type: DataTypes.STRING, 
        allowNull: false // Ej: Arroz, Ropa, Insumos Médicos
    },
    cantidad: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    unidadMedida: { 
        type: DataTypes.STRING, 
        allowNull: false // Ej: Kilos, Cajas, Unidades
    },
    estado: { 
        type: DataTypes.STRING, 
        defaultValue: 'Recibido en Acopio' 
    }
}, {
    timestamps: true, // Agrega automáticamente createdAt y updatedAt
    tableName: 'donaciones'
});

module.exports = Donacion;