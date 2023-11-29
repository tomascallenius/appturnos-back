const User = require('../../DB/models/User');

const createUserController = async (name, email, password) => {
    try {
        const newUser = new User({ name, email });
        newUser.password = await newUser.encryptPassword(password);  // accede a la propiedad password de la instancia, y le asigna el metodo de la instancia de User
        await newUser.save();
        return newUser;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
}

module.exports = createUserController;
