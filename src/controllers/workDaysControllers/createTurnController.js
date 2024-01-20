const WorkDay = require("../../DB/models/WorkDay");
const corroborate = require("../../helpers/corroborateDisponibility");

const createTurnController = async (date, emailWorker, selectedTime, serviceSelected, user) => {
  try {
    const asignTurn = await WorkDay.findOne({month: date[1], day: date[0], email: emailWorker});

    var newDay = asignTurn

    let contador = 0

    for(let i = 0; i < newDay.time.length; i++) {
        if (contador > 0 && contador <= asignTurn.services[serviceSelected].duration) {
            newDay.time[i] = user
            contador++
        }
        if (newDay.time[i] == "free" && i == selectedTime) {
            newDay.time[i] = user
            contador++
        }
    }
    const serv = Object.keys(asignTurn.services)
    serv.forEach(element => {
        if (corroborate(newDay.time, newDay.services[element].duration) == true) {
            newDay.services[element].available = true
        } else {
            newDay.services[element].available = false
        }
    })
    await newDay.save();
    return newDay;
  } catch (error) {
    console.error("Error al reservar turno (controller):", error);
    throw error;
  }
};

module.exports = createTurnController;
