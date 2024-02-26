const express = require('express')
const morgan = require('morgan')
var cors = require('cors')

const app = express()

const route = require('./src/routes')
const db = require('./src/config/db');
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

route(app)

// 
app.listen(5000, () => {
console.log(`Server listening on port ${5000}`)
})