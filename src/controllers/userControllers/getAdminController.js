const User = require("../../DB/models/User");

const getAdminController = async (email) => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return existingUser.admin;
    } else {
          
    }  throw new Error("Error, el usuario no existe");
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
};

module.exports = getAdminController;
