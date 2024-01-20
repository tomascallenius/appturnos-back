const updateUserController = require("../../controllers/userControllers/updateUserController");

const updateUserHandler = async (req, res) => {
  const { email, newServicesDuration } = req.body;
  try {
    const user = await updateUserController(email, newServicesDuration);
    res.status(200).json({ message: "Cambio al usuario realizado con exito" });
  } catch (error) {
    res.status(500).json({ message: "Error al intentar cambiar usuario" });
  }
};

module.exports = updateUserHandler;
