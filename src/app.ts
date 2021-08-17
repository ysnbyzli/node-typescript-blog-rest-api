import express from 'express';
import * as dotenv from 'dotenv';
import Logger from './utils/logger'
import loggerMiddleware from './middlewares/logger.middleware';
import connect from './db/connect';

const app = express();
dotenv.config();

// middlewares
app.use(loggerMiddleware)



if (!process.env.PORT) {
    process.exit(0);
}


app.get('/logger', (_, res) => {
    Logger.error('This is an error log');
    Logger.warn('This is a warn log');
    Logger.info('This is a info log');
    Logger.debug('This is a debug log');

    res.send('Hello world');
})


app.listen(process.env.PORT, () => {
    console.log(`server is started running on port ${process.env.PORT} 🚀🚀`);
    connect()
});
