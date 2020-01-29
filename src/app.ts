import express from 'express';
import * as http from 'http';
import { ExpressConfig } from './express';
const mongoose = require('mongoose');
const port = 3000;

export class Application {


    server: http.Server;
    express: ExpressConfig;

    constructor() {

        this.express = new ExpressConfig();
        /**
         * Start server
         */
        try {
            this.server = this.express.app.listen(3000, (err, result) => {
                if (err) {
                    console.log('Error while starting the server', err.message);
                } else {
                    console.log('Server reunning on port 3000!!!!');
                }
            });
        } catch (err) {
            if (err) {
                console.log(err.message);
            } else {
                console.log('Success!!');
            }
        }

        const MONGO_URI = 'mongodb://localhost:27017/todo';

        this.server.on('listening', async () => {

            console.info(`Listening on port ${27017}`);
            mongoose.connect(MONGO_URI, { useNewUrlParser: true });

            mongoose.connection.once('open', () => {
                console.info('Connected to Mongo via Mongoose');
            });
            mongoose.connection.on('error', (err) => {
                console.error('Unable to connect to Mongo via Mongoose', err);
            });
        });
    }
}
