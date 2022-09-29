const express = require('express');
const router = express.Router();



router.get("/" , (req,res) => {
    res.send("Welcome to TasteBuds Food Delivery Web Site...!");
});


module.exports = router