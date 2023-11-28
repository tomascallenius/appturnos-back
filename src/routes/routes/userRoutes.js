const { Router } = require("express");

const router = Router();


const createUserHandler = require("../../handlers/userHandlers/createUserHandler.js");
const getAllUsersHandler = require("../../handlers/userHandlers/getAllUsersHandler.js");

router.get('/all', getAllUsersHandler);
router.post("/create", createUserHandler);


module.exports = router;
