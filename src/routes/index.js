const { Router } = require('express');

const userRoutes = require('./routes/userRoutes.js')  // trae el modulo userRouter de..

const router = Router();  // ejecuta Router de express

router.use("/users", userRoutes);  //  .use de Router lleva path y callback (previamente importado)

module.exports = router;
