import * as dotenv from 'dotenv';

export function overrideEnv() {
    if (process.env.NODE_ENV !== 'production') {
        dotenv.config();
        console.log('warn: Loaded Env file over Node process.env');
    }
}