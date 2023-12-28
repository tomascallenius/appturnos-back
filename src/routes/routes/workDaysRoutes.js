const { Router } = require("express");
const createDaysHandler = require("../../handlers/workDaysHandlers/createDaysHandler.js");
const getDaysHandler = require("../../handlers/workDaysHandlers/getDaysHandler.js");
const updateDayHandler = require("../../handlers/workDaysHandlers/updateDayHandler.js");
const getDaysByServiceHandler = require("../../handlers/workDaysHandlers/getDaysByServiceHandler.js");

const router = Router();

router.post("/create", createDaysHandler);
router.get('/getdays', getDaysHandler);
router.get("/daysByService", getDaysByServiceHandler);

router.put('/updateday', updateDayHandler);

/* router.get('/getHours', getHoursHandler); */


module.exports = router;
