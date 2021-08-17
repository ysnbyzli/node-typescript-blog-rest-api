import express from 'express';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

if (!process.env.PORT) {
  process.exit(0);
}

app.listen(process.env.PORT, () => {
  console.log(`server is started running on port ${process.env.PORT} 🚀🚀`);
});
