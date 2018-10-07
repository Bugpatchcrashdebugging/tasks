
import * as express from "express";
import * as bodyParser from "body-parser";

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this._config();
  }

  private _config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    const port = 8080;
    this.app.set("port", port);
  }
}

export default new App().app;
