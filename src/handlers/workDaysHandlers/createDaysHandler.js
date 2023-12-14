const createDaysController = require('../../controllers/workDaysControllers/createDaysController');

const createDaysHandler = async (req, res) => {

    const { date, hairstylist, time } = req.body;  // deberia ser un array de fechas
    try {
        const newDays = await createDaysController( date, hairstylist, time );
        res.status(200).json(newDays);
    } catch (error) {
        res.status(500).json({message: 'Error al agendar dias laborales.'});

    }
}

module.exports = createDaysHandler;