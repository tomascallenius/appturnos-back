const User = require('../../DB/models/User');

const getAllUsers = async () => {
  try {
    const users = await User.find(); // se trae toda la coleccion User
    return users;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

module.exports = getAllUsers;
