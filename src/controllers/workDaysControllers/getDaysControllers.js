const WorkDay = require("../../DB/models/WorkDay");

const getDaysController = async () => {
  try {
    const days = await WorkDay.find();
    return days;
  } catch (error) {
    console.error("Error al obtener días laborales:", error);
    throw error;
  }
};

module.exports = getDaysController;
