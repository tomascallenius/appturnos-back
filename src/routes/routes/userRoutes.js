const { Router } = require("express");

const router = Router();

const createUserHandler = require("../../handlers/userHandlers/createUserHandler.js");
const getAllUsersHandler = require("../../handlers/userHandlers/getAllUsersHandler.js");
const getAdminHandler = require("../../handlers/userHandlers/getAdminHandler.js");
const workerstatusHandler = require("../../handlers/userHandlers/workerstatusHandler.js");
const deleteUserHandler = require("../../handlers/userHandlers/deleteUserHandler.js");

router.get("/all", getAllUsersHandler);
router.post("/getadmin", getAdminHandler);
router.post("/create", createUserHandler);
router.put("/workerstatus", workerstatusHandler);
router.delete("/delete", deleteUserHandler);



module.exports = router;
