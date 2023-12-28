const getDaysByServiceController = require("../../controllers/workDaysControllers/getDaysByServiceController");

const getDaysByServiceHandler = async (req, res) => {
  //   const { service } = req.body;

  try {
    const days = await getDaysByServiceController();
    res.status(200).json(days);
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener los días con el servicio "${service}".`,
    });
  }
};

module.exports = getDaysByServiceHandler;
