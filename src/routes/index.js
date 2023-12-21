const { Router } = require('express');

const userRoutes = require('./routes/userRoutes.js');  // trae el modulo userRouter de..
const daysRoutes = require('./routes/workDaysRoutes.js')
const servicesRoutes = require('./routes/services.js')

const router = Router();  // ejecuta Router de express

router.use("/users", userRoutes);  //  .use de Router lleva path y callback (previamente importado)
router.use('/workdays', daysRoutes)
router.use('/services', servicesRoutes)


module.exports = router;
