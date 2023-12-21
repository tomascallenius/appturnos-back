const workerStatusController = require("../../controllers/userControllers/workerStatusController");

const workerstatusHandler = async (req, res) => {
  const { email, status } = req.body;

  try {
    const user = await workerStatusController(email, status);
    res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error creating user." });
  }
};

module.exports = workerstatusHandler;
