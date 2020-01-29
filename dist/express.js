"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const bodyParser = __importStar(require("body-parser"));
const routing_controllers_1 = require("routing-controllers");
class ExpressConfig {
    constructor() {
        this.app = express_1.default();
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
        this.app.use(express_1.default.static(path.resolve('./client/dist')));
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
    serveIndex(req, res) {
        // res.sendFile(path.resolve('./client/dist/index.html'));
        res.json({ 'message': 'you will gwt some file' });
    }
    setupControllers() {
        try {
            const rootPath = path.resolve('./dist');
            const corsConfig = {
                origin: function (origin, callback) {
                    console.log('origin', origin);
                    callback(null, true);
                },
                credentials: true,
                allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept', 'organization-id', 'organization-domain'],
                methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
            };
            routing_controllers_1.useExpressServer(this.app, {
                middlewares: [`${rootPath}/modules/**/*.middleware.js`],
                interceptors: [`${rootPath}/modules/**/*.interceptor.js`],
                controllers: [`${rootPath}/modules/**/*.controller.js`],
                defaultErrorHandler: false,
                cors: process.env.ENABLE_CORS ? corsConfig : false
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
    }
}
exports.ExpressConfig = ExpressConfig;
//# sourceMappingURL=express.js.map