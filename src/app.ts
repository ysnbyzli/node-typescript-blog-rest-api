import express from 'express';
import * as dotenv from 'dotenv';
import loggerMiddleware from './middlewares/logger.middleware';
import connect from './db/connect';
import router from './routes';

const app = express();
dotenv.config();

// middlewares
app.use(loggerMiddleware)
app.use(express.json())
app.use('/api/v1',router)


if (!process.env.PORT) {
    process.exit(0);
}

app.listen(process.env.PORT, () => {
    console.log(`server is started running on port ${process.env.PORT} 🚀🚀`);
    connect()
});
