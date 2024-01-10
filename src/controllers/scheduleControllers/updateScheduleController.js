const Schedule = require("../../DB/models/Schedule");

const updateScheduleController = async (newScheduleValues) => {
  try {
    let existingSchedule = await Schedule.findOne();

    // Reemplazar directamente el objeto usando Object.assign
    existingSchedule.businessSchedule = Object.assign({}, newScheduleValues);

    await existingSchedule.save();
    return existingSchedule;
  } catch (error) {
    console.error("Error al actualizar el horario en la base de datos:", error);
    throw new Error("Error al actualizar el horario en la base de datos");
  }
};

module.exports = updateScheduleController;
