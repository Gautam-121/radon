const express = require('express');
const externalModule = require('./logger/logger.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    
});


module.exports = router;
// adding this comment for no reason