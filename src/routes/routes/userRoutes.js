const { Router } = require("express");

const router = Router();

const createUserHandler = require("../../handlers/userHandlers/createUserHandler.js");
const getAllUsersHandler = require("../../handlers/userHandlers/getAllUsersHandler.js");
const updateUserHandler = require("../../handlers/userHandlers/updateUserHandler.js");
const getUserByEmailHandler = require("../../handlers/userHandlers/getUserByEmailHandler.js");


router.get("/all", getAllUsersHandler);
router.post("/create", createUserHandler);
router.put("/update", updateUserHandler);
router.post("/byemail", getUserByEmailHandler);



module.exports = router;
