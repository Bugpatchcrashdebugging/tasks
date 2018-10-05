import * as winston from 'winston';

import * as path from 'path';

declare let logger: any;

let fileSize: number = 1024000;

let myFormat = winston.format.printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

class LoggerService {
  private _commonLogger: any

  constructor(){
    this._commonLogger = null;
  }

  initLoggers() {
    this._commonLogger = this.getCommonLogger();
  }

  initGlobalLogger(){
    logger = this._commonLogger;
  }

  public getCommonLogger(): any{
    console.log(winston.version);
    console.log(path.join(process.cwd(),"logs", "common", "log.log"));
    console.log(`${__dirname}`);
    
    const fileLogger = new(winston.transports.File)({
      filename: path.join('logs', 'common', 'log.log'),
      handleExceptions: true,
      maxsize: fileSize,
      format: winston.format.combine(
        winston.format.timestamp(),
        myFormat
      ) 
    });

    const result = winston.createLogger({
      transports: [
        new(winston.transports.Console)({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
           myFormat
          )
        }),
        fileLogger
      ],
      exceptionHandlers: [fileLogger]
    });
    return result;
  }
}

export default new LoggerService();
