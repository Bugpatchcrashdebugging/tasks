// import * as http from 'http';

// const DBService = require('./lib/db/services/db-service');
// import * as app from './lib/server/models/express-app';
// const loggers = require('./lib/tools/loggers');

// loggers.initLoggers();
// loggers.initGlobalLogger();


//  const initApp = async () => {
//   try {
//     await DBService.initDataBase();
//     const port = app.get('port')
//     const server = http.createServer(app);
//     server.listen(port, ()=>{
//       logger.info(`Server started on port ${port}`)
//       console.log(`Server started on port ${port}`)
//     })
//   } 
//   catch (error) {
//    logger.info(error);
//   }
// }

// initApp();


import * as http from 'http';
import app from './lib/server/models/express-app';
import DBService from './lib/db/services/db-service';
// import loggers from './lib/tools/loggers';
// import 'logger';
// loggers.initLoggers();
// loggers.initGlobalLogger();


 const initApp = async () => {
  try {
    await DBService.initDataBase();
    const port = app.get('port')
    const server = http.createServer(app);
    server.listen(port, ()=>{
      // logger.info(`Server started on port ${port}`)
      console.log(`Server started on port ${port}`)
    })
  } 
  catch (error) {
   // logger.info(error);
   console.log(error);
  }
}

initApp();

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log('Express server listening on port ' + PORT);
// })
