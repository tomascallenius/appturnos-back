const WorkDay = require("../../DB/models/WorkDay");
//devuelve ej:result = {12:{15:"toUpdate"},12:{16:"warningUpdate"}}
const getDaysController = async (email) => {
  try {
    console.log('pase 2')
    const days = await WorkDay.find(email).select("date time");

    // Inicializar el objeto de resultado
    const result = {};

    // Iterar sobre los días obtenidos de la base de datos
    days.forEach((day) => {
      const dateParts = day.date.split("/");
      const month = parseInt(dateParts[1], 10);
      const dayOfMonth = parseInt(dateParts[0], 10);

      // Verificar si ya existe result[month] y asignar un valor en consecuencia
      result[month] = result[month] || {};

      result[month][dayOfMonth] = day.time.some((minute) => {
        if (minute === null || minute === "free") {
          return false; // Continuar iterando
        } else {
          return true; // Detener la iteración y devolver "warningUpdate"
        }
      })
        ? "warningUpdate"
        : "toUpdate";
    });

    return result;
  } catch (error) {
    console.error("Error al obtener días laborales:", error);
    throw error;
  }
};

module.exports = getDaysController;