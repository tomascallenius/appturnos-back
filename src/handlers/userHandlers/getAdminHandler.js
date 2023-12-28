const getAdminController = require("../../controllers/userControllers/getAdminController");

const getAdminHandler = async (req, res) => {
      const { email } = req.body; 
  try {
    const isadmin = await getAdminController(email);
    res.status(200).json({ isadmin }); //true o false de la propiedad admin del modelo User.
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error getting admin" });
  }
};

module.exports = getAdminHandler;
