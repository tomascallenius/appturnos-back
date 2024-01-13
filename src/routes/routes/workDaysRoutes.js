const { Router } = require("express");
const createDaysHandler = require("../../handlers/workDaysHandlers/createDaysHandler.js");
const getDaysHandler = require("../../handlers/workDaysHandlers/getDaysHandler.js");
const updateDayHandler = require("../../handlers/workDaysHandlers/updateDayHandler.js");
const getDaysByServiceHandler = require("../../handlers/workDaysHandlers/getDaysByServiceHandler.js");
const getDaysByEmailHandler = require("../../handlers/workDaysHandlers/getDaysByEmailHandler.js");

const router = Router();

router.get("/", getDaysHandler);
router.get("/daysbyservice", getDaysByServiceHandler);
router.post("/create", createDaysHandler);
router.post("/byemail", getDaysByEmailHandler);
router.put("/updateday", updateDayHandler);

/* router.get('/getHours', getHoursHandler); */

module.exports = router;
