const { Router } = require('express');

const userRoutes = require('./routes/userRoutes.js');  // trae el modulo userRouter de..
const createDays = require('./routes/workDaysRoutes.js')

const router = Router();  // ejecuta Router de express

router.use("/users", userRoutes);  //  .use de Router lleva path y callback (previamente importado)
router.use('/workdays', createDays)

module.exports = router;
