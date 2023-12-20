const User = require("../../DB/models/User");

const createUserController = async (name, email) => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return existingUser;
    } else {
      const newUser = new User({ name, email });
      await newUser.save();
      return newUser;
    }
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};

module.exports = createUserController;
