// // const express = require('express');
// // let bodyParser = require('body-parser');
// // const routes = require('../../routes')

// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// const routes = require('../../routes');

// class App {


//     public app: express.Application;

//     constructor() {
//         this.app = express();
//         this._config();
//     }

//     private _config(): void {
//         // support application/json type post data
//         this.app.use(bodyParser.json());
//         //support application/x-www-form-urlencoded post data
//         this.app.use(bodyParser.urlencoded({ extended: false }));

//         this.app.use(bodyParser.json());
//         this.app.use(bodyParser.urlencoded({ extended: true }));

//         const port = 8080;
//         this.app.set('port', port);
//         this.app.use((req, res, next) => {
//             res.setHeader("Access-Control-Allow-Origin", "*");
//             res.setHeader("Access-Control-Allow-Credentials", "true");
//             res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//             res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

//             next();
//         })

//         this.app.use('/api/v1', routes);

//         this.app.use((req, res) => {
//             res.status(404).send('404: NotFound')
//         });

//         this.app.use((err, req, res, next) => {
//             // logger.info(err.stack)
//             res.status(500).send('500: Internal server')
//         })
//     }
// }


import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {


    public app: express.Application;

    constructor() {
        this.app = express();
        this._config();
    }

    private _config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        const port = 8080;
        this.app.set('port', port);
    }
}

export default new App().app;

