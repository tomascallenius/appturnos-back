const Schedule = require("../../DB/models/Schedule");

const getScheduleController = async () => {
  try {
    const existing = await Schedule.findOne();
    if (existing) {
      console.log(existing);

      return existing;
    } else {
      const newSchedule = new Schedule({
        businessSchedule: {
          0: { open: 0, close: 1440 },
          1: { open: 0, close: 1440 },
          2: { open: 0, close: 1440 },
          3: { open: 0, close: 1440 },
          4: { open: 0, close: 1440 },
          5: { open: 0, close: 1440 },
          6: { open: 0, close: 1440 },
        },
      });
      await newSchedule.save();
      console.log(newSchedule);
      return newSchedule;
    }
  } catch (error) {
    console.error("Error al obtener el horario desde la base de datos:", error);
    throw new Error("Error al obtener el horario desde la base de datos");
  }
};

module.exports = getScheduleController;
