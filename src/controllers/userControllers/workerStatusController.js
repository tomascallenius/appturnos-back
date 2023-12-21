const User = require("../../DB/models/User");

const workerStatusController = async (email, status) => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      existingUser.worker = status;
      await existingUser.save();
      return existingUser;
    } else {
      throw new Error("Error, el usuario no existe");
    }
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};

module.exports = workerStatusController;
