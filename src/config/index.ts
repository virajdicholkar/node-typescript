import { config as envParser } from 'dotenv';
import { resolve } from 'path';

const path = resolve('.env');
envParser({ path });

const config = {
    port: process.env.PORT,
    mongoDbUrl: process.env.MONGODB_URL
}
export default config; 