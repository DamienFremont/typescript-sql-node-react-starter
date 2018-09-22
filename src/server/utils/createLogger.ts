import * as winston from 'winston';

export function createLogger() {
    const level = process.env.LOGGER_LEVEL || 'info';
    const lo = winston.createLogger({
        level,
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' })
        ]
    } as winston.LoggerOptions);
    if (process.env.NODE_ENV !== 'production') {
        lo.add(new winston.transports.Console({
            format: winston.format.simple()
        }));
    }
    return lo;
}