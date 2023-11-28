const User = require('../../DB/models/User');

const createUserController = async (email, password) => {
    
    try {
        const encryptedPassword = await User.encryptPassword(password); // metodo de User creado en la el modelo

        const newUser = new User({ email, password: encryptedPassword });
        await newUser.save();
        
        return newUser;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
}

module.exports = createUserController;
