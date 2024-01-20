const { Router } = require("express");

const router = Router();

const createUserHandler = require("../../handlers/userHandlers/createUserHandler.js");
const getAllUsersHandler = require("../../handlers/userHandlers/getAllUsersHandler.js");
const updateUserHandler = require("../../handlers/userHandlers/updateUserHandler.js");
const getUserByEmailHandler = require("../../handlers/userHandlers/getAllUsersHandler.js");


router.get("/all", getAllUsersHandler);
router.post("/byemail", getUserByEmailHandler);
router.post("/create", createUserHandler);
router.put("/update", updateUserHandler);



module.exports = router;
