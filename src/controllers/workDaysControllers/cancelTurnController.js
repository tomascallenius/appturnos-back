const CancelledTurns = require("../../DB/models/CancelledTurns");
const User = require("../../DB/models/User");

const cancelTurnController = async (month, day, time, emailWorker, emailClient) => {
  try {
    const emailsToSearch = turnsCancelled.map((turnCancelled) => turnCancelled.email);
    const existingUsers = await User.find({ email: { $in: emailsToSearch } }); // ojo, no poner array de objetos
      
        for (const turnCancelled of turnsCancelled) {
            const { email, ini, fin } = turnCancelled;
      
            const existingUser = existingUsers.find((user) => user.email === email);
      
            if (existingUser) {

/* ---------------------------------------------------------------------------------------------
 CCCC    OOO    MMM   MMM  PPPP   L       EEEEE  TTTTT   AAA   RRRR
C   C   O   O   MM M M MM  P   P  L       E        T    A   A  R   R
C       O   O   MM  M  MM  PPPP   L       EEEE     T    AAAAA  RRRR
C   C   O   O   MM     MM  P      L       E        T    A   A  R  R
 CCCC    OOO    MM     MM  P      LLLLL   EEEEE    T    A   A  R   RR
---------------------------------------------------------------------------------------------- */


              const newTurnCancelled = new CancelledTurns({
                month: month,
                day: day,
                /* name: existingUser.name,  aca iria el name cuando tengamos */
                email,
                phone: existingUser.phone,
                turn: {
                  ini,
                  fin,
                },
                howCancelled: emailCancelator,
              });
              console.log(newTurnCancelled)
              await newTurnCancelled.save();
            }
        }
        console.log("salida de cancelTurnController")
    return ;
  } catch (error) {
    console.error("Error al crear en el modelo de turnos cancelados:", error);
    throw error;
  }
};

module.exports = cancelTurnController;