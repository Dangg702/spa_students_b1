import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import db from './src/config/db/index.js';
import routes from './src/routes/index.js';

import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

const app = express()

// connect to DB
db.connect();

// dùng để map dữ liệu qua
app.use(cors())

app.use(morgan('combined')) 

// middleware: parse body
app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

routes(app)

// 
app.listen(5001, () => {
console.log(`Server listening on port ${5001}`)
})

export default app; //for testing purposes