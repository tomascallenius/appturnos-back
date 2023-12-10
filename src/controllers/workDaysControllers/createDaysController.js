const User = require('../../DB/models/User');

const createDaysController = async (days, time) => {
    try {
        const listo = { days, time , respuesta: 'listorti'}
        return listo;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
}

module.exports = createDaysController;