import express from 'express';
import * as dotenv from 'dotenv';
import connect from './db/connect';
import router from './routes';
import { errorHandlerMiddleware, loggerMiddleware } from './middlewares';

const app = express();
dotenv.config();

// middlewares
app.use(loggerMiddleware)
app.use(express.urlencoded({extended : true}))
app.use(express.json())
// middlewares router
app.use('/api/v1',router)
// middlewares error
app.use(errorHandlerMiddleware)


if (!process.env.PORT) {
    process.exit(0);
}

app.listen(process.env.PORT, () => {
    console.log(`server is started running on port ${process.env.PORT} 🚀🚀`);
    connect()
});
