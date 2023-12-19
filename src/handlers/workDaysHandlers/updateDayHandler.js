const updateDayController = require("../../controllers/workDaysControllers/updateDayController");

const updateDayHandler = async (req, res) => {

    const { date, hairstylist, time } = req.body;  // deberia ser un array de fechas
    try {
        const day = await updateDayController( date, hairstylist, time );
        res.status(200).json(day);
    } catch (error) {
        res.status(500).json({message: 'Error al editar dia laboral.'});

    }
}

module.exports = updateDayHandler;