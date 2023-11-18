import { listen } from './src/server.js';
import { connect } from './src/database';


connect.sync({ force: true }).then(() => {
  server(3001, () => {
    console.log('Escuchando el puerto 3001'); 
  });
});