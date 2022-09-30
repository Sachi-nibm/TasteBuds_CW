const express = require('express');const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const home = require('./routes/home');
const Outlets = require('./routes/outlets')
const Foods = require('./routes/foods')

const PORT = process.env.PORT || 3000;

//connect to localhost DB
connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use("/",home);
app.use("/api/outlets", Outlets);
app.use("/api/foods", Foods);


app.listen(PORT, () => {
    console.log(`Strated listening on port : ${PORT}`);
});