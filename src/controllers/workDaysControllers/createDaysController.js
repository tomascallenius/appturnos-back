const WorkDay = require("../../DB/models/WorkDay");

const createDaysController = async (date, email, time) => {
  try {
    const newDay = new WorkDay({
      date,
      email,
      time: Array(1441).fill(null),
    });
    time.forEach((element) => {
      if (element >= 0 && element < 1441) {
        newDay.time[element] = "free";
      }
    });
    await newDay.save();
    return newDay;
  } catch (error) {
    console.error("Error al crear día de laboral:", error);
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
