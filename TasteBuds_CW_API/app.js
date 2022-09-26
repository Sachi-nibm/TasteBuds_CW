const express = require('express');
const app = express();
const home = require('./route/home');
const PORT = 5000;

app.use(express.json());

app.use("/",home);


app.listen(PORT, () => {
    console.log("Strated listening on port " + PORT);
});