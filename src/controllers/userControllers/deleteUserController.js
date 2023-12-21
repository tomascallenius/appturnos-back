const User = require("../../DB/models/User");

const deleteUserController = async (email) => {
  try {
    // Buscar el usuario en la base de datos
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Eliminar el usuario de la base de datos
      await existingUser.deleteOne();

      return existingUser; // Devolver el usuario eliminado
    } else {
      // Si el usuario no existe, retornar un mensaje indicando que no existe
      return { message: "El usuario no existe en la colección." };
    }
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw new Error("Error al eliminar el usuario");
  }
};

module.exports = deleteUserController;
