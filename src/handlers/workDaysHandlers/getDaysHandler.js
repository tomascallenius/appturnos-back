const getDaysController = require("../../controllers/workDaysControllers/getDaysControllers");


const getDaysHandler = async (req, res) => {
  const { email } = req.body;

    try {
        console.log('pase')
        const days = await getDaysController(email);
        res.status(200).json(days);
    } catch (error) {
        res.status(500).json({message: 'Error al obtener los dias.'});

    }
}

module.exports = getDaysHandler;