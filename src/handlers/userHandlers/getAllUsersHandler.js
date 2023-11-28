const getAllUsers = async (req, res) => {
  try {
    res.status(200).json({ message: "simulamos todos los usuarios" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error getting users" });
  }
};

module.exports = getAllUsers;