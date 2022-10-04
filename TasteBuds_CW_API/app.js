const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require("cors")
const connectDB = require('./config/db')
const { errorHandler } = require('./middlewares/errorMiddleware')
const home = require('./routes/home');
const Outlets = require('./routes/outlets')
const Foods = require('./routes/foods')
const user = require('./routes/users')
const signin = require('./routes/signin')

const PORT = process.env.PORT || 3000;

//connect to localhost DB
connectDB()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use("/",home);
app.use("/api/outlets", Outlets);
app.use("/api/foods", Foods);
app.use("/api/users", user);
app.use("/api/signin", signin);

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Strated listening on port : ${PORT}`);
});