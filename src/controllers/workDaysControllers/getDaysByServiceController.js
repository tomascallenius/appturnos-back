const WorkDay = require("../../DB/models/WorkDay");
const User = require("../../DB/models/User");

const getDaysByServiceController = async () => {
  try {
    const workdays = await WorkDay.find().select("date services time email");

    // Obtener todos los usuarios para comparar los correos electrónicos
    const users = await User.find().select("email name");

    // Asociar el nombre del usuario a cada día laboral
    const workdaysWithNames = workdays.map((workday) => {
      const user = users.find((user) => user.email === workday.email);
      return {
        ...workday._doc, // Copiar todas las propiedades existentes de workday
        name: user ? user.name : "Usuario no encontrado", // Agregar la propiedad name
      };
    });

    // Eliminar la propiedad email de cada objeto en workdaysWithNames
    const workdaysWithoutEmail = workdaysWithNames.map((workday) => {
      const { email, ...rest } = workday;
      return rest;
    });

    return workdaysWithoutEmail;
  } catch (error) {
    console.error("Error al obtener días laborales:", error);
    throw error;
  }
};

module.exports = getDaysByServiceController;
  