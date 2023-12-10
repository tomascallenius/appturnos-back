const { Router } = require("express");
const createDaysHandler = require("../../handlers/workDaysHandlers/createDaysHandler.js");
const getDaysHandler = require("../../handlers/workDaysHandlers/getDaysHandler.js");

const router = Router();

router.post("/create", createDaysHandler);
router.get('/getdays', getDaysHandler);
/* router.get('/getHours', getHoursHandler); */


module.exports = router;
