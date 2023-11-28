const createUserController = require('../../controllers/userControllers/createUserController')

const createUserHandler = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await createUserController(email, password);
        res.status(200).json({message: "User created successfully."});
    } catch (error) {
        res.status(500).json({message: 'Error creating user.'});

    }
}

module.exports = createUserHandler;