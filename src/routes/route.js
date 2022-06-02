const express = require('express');
 const externalModule = require('./logger/logger.js')
 const externalUntil = require("./until/helper.js")
 const externalValidator=require("./validator/formatter")

const router = express.Router();

router.get('/test-me', function (req, res) {
     externalModule.welcome()
     externalUntil.getBatchInfo()
     externalUntil.printDate()
     externalUntil.printMonth()
     externalValidator.trim();
     externalValidator.changetoLowerCase();
     externalValidator.changetoUpperCase();
    
});


module.exports = router;
// adding this comment for no reason