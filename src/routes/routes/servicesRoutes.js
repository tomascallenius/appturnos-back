const { Router } = require("express");
const getServicesHandler = require("../../handlers/servicesHandler/getServicesHandler");
const createServicesHandler = require("../../handlers/servicesHandler/createServicesHandler");
const deleteServicesHandler = require("../../handlers/servicesHandler/deleteServicesHandler");

const router = Router();

router.get("/", getServicesHandler);
router.post("/create", createServicesHandler);
router.delete("/delete", deleteServicesHandler);

module.exports = router;
