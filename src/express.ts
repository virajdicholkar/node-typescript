import express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { useExpressServer } from 'routing-controllers';

export class ExpressConfig {

    app: any;


    constructor() {

        this.app = express();

        // setupLogging(this.app);

        this.app.use(bodyParser.urlencoded({ extended: true }));
        // this.app.use(compression());
        this.app.use(bodyParser.json());

        // this.app.engine('html', hbs.express4({
        //   extname: '.html'
        // }));
        this.app.set('view engine', '.html');
        // TODO: change to dist it later
        this.app.set('views', path.resolve('./server'));
        // this.app.use(cookieParser());
        // this.app.use('/api/health', healthcheck());

        // Point static path to dist
        this.app.use(express.static(path.resolve('./client/dist/client')));

        this.app.get('/api', (req, res) => {
            res.json({
                service: `local service`,
                time: new Date()
            });
        });

        /**
         * Angular HTML5 mode
         * Catch all other routes and return the index file
         */
        this.app.get(/^\/(?!api).*/, this.serveIndex);
        this.setupControllers();

    }

    serveIndex(req: any, res: any) {
        const indexPath = path.resolve('./client/dist/client/index.html');
        console.log('indexPath', indexPath)
        if (indexPath) {
            res.sendFile(indexPath);
        } else {
            res.json({
                message: 'please do npm run client:watch'
            });
        }
    }

    setupControllers() {
        try {
            const rootPath = path.resolve('./dist');
            const corsConfig = {
                origin: function (origin: string, callback: any) {
                    console.log('origin', origin);
                    callback(null, true);
                },
                credentials: true,
                allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept', 'organization-id', 'organization-domain'],
                methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
            };
            useExpressServer(this.app, {
                middlewares: [`${rootPath}/modules/**/*.middleware.js`],
                interceptors: [`${rootPath}/modules/**/*.interceptor.js`],
                controllers: [`${rootPath}/modules/**/*.controller.js`],
                defaultErrorHandler: false,
                cors: process.env.ENABLE_CORS ? corsConfig : false
            });
        } catch (err) {
            if (err) {
                console.log(err.message);
            } else {
                console.log('Success!!');
            }
        }
    }

}