const User = require('../../DB/models/User');

const getAllUsers = async () => {
  try {
    const users = await User.find().select('-password'); // pedimos que omita la propiedad
    return users;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

module.exports = getAllUsers;