require('dotenv').config();
const server = require('./src/app.js')
require('./src/DB/db.js')

  server.listen(3001, () => {
    console.log("Server listening on 3001"); 
});