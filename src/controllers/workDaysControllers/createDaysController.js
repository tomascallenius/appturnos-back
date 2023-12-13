const WorkDays = require('../../DB/models/WorkDays');

const createDaysController = async (name, days, availability) => {
    try {
        // Buscar un documento existente con los mismos días
        const existingDay = await WorkDays.findOne({ days });

        const newTimeEntries = availability.map(element => ({
            [element]: { [name]: 'free'}
        }));

        if (existingDay) {
            // Si existe, actualizar el documento existente
            existingDay.time.push(...newTimeEntries);
            await existingDay.save();
            return existingDay;
        } else {
            // Si no existe, crear un nuevo documento
            const createdDay = new WorkDays({ days, time: newTimeEntries });
            await createdDay.save();
            return createdDay;
        }
    } catch (error) {
        console.error('Error al crear o actualizar día de trabajo:', error);
        throw error;
    }
};

module.exports = createDaysController;

// const myArray = new Array(25).fill(null);
