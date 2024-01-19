const WorkDay = require("../../DB/models/WorkDay");

const getDayForTurnsController = async (dayForTurns) => {
  try {
    const day = dayForTurns[0]
    const month = dayForTurns[1]

    const days = await WorkDay.find({ month, day });

    return days;
  } catch (error) {
    console.error("Error al obtener el día:", error);
    throw error;
  }
};

module.exports = getDayForTurnsController;



/*     const result = {};

    days.forEach((element) => {
      const { month, day, time, turn, services } = element;

      if (!result[month]) {
        result[month] = {};
      }

      if (!result[month][day]) {
        result[month][day] = {};
      }

      result[month][day] = {
        time,
        turn,
        services,
      };
    }); */