const createUserHandler = async (req, res) => {

    try {
        res.status(200).json({message: "User created successfully."});
    } catch (error) {
        res.status(500).json({message: 'Error creating user.'});

    }
}

module.exports = createUserHandler;