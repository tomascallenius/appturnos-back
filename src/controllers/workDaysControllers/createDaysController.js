const WorkDay = require('../../DB/models/WorkDay');

const createDaysController = async (date, hairstylist, time) => {
    try {
        const existingDay = await WorkDay.findOne({ hairstylist, date });
        if (existingDay) {
            console.log('este es el dia',existingDay)
        } else {
            // Si no existe, crear un nuevo documento
            const newDay = new WorkDay({
                date,
                hairstylist,
                time: Array(1441).fill(null)
            });
            time.forEach(element => {
                if (element >= 0 && element < 1441) {
                    newDay.time[element] = 'free';
                }
            });

            await newDay.save();
            console.log('Nuevo documento creado:', newDay);
            return newDay;
        }
    } catch (error) {
        console.error('Error al crear o actualizar día de trabajo:', error);
        throw error;
    }
};

module.exports = createDaysController;

/*  LO QUE VIENE POR PARAMETRO

 date: "11/12/2023"
 hairstylist: "facundito"
 time: [
    3,
    4,
    5,
    6,
    11,
    12
 ] */