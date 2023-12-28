const WorkDay = require("../../DB/models/WorkDay");

const getDaysByServiceController = async () => {
  try {
    const workdays = await WorkDay.find().select("date services");

    return workdays;
  } catch (error) {
    console.error("Error al obtener días laborales:", error);
    throw error;
  }
};

module.exports = getDaysByServiceController;
