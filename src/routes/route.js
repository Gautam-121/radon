const express = require('express');


const router = express.Router();

router.get('/movies', function(req,res){
     const array =[ "bhool bullaya","spider-man","fir hera feri","dancer1","kgf"]

     res.send(array)
})
module.exports = router;
// adding this comment for no reason