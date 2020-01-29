"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("./express");
const mongoose = require('mongoose');
const port = 3000;
class Application {
    constructor() {
        console.log('Helllooo');
        this.express = new express_1.ExpressConfig();
        /**
         * Start server
         */
        try {
            this.server = this.express.app.listen(3000, (err, result) => {
                if (err) {
                    console.log('Error while starting the server', err.message);
                }
                else {
                    console.log('Server reunning on port 3000!!!!');
                }
            });
        }
        catch (err) {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log('Success!!');
            }
        }
        const MONGO_URI = 'mongodb://localhost:27017/todo';
        this.server.on('listening', () => __awaiter(this, void 0, void 0, function* () {
            console.info(`Listening on port ${27017}`);
            mongoose.connect(MONGO_URI, { useNewUrlParser: true });
            mongoose.connection.once('open', () => {
                console.info('Connected to Mongo via Mongoose');
            });
            mongoose.connection.on('error', (err) => {
                console.error('Unable to connect to Mongo via Mongoose', err);
            });
        }));
    }
}
exports.Application = Application;
//# sourceMappingURL=app.js.map