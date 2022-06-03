const express = require('express');
const lodash = require("lodash");
 const externalModule = require('./logger/logger.js')
 const externalUntil = require("./until/helper.js")
 const externalValidator=require("./validator/formatter")

const router = express.Router();

router.get('/test-me/:ab', function (req, res) {
     externalModule.welcome()
     externalUntil.getBatchInfo()
     externalUntil.printDate()
     externalUntil.printMonth()
     externalValidator.trim();
     externalValidator.changetoLowerCase();
     externalValidator.changetoUpperCase();
    
});

router.get('/hello', function(req,res){
     const array=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
     
     const sum = lodash.chunk(array,3);
     console.log(sum)

     const array1=[1,3,5,7,9,11,13,15,17,19]
     const lastninelement=lodash.tail(array1)
     console.log(lastninelement);

     const array3 =[1,2,3]
     const array4=[2,3,4]
     const array5 =[4,5,6]
     const array6 =[6,7,8]
     const array7 =[8,9,10]

     const unique= lodash.union(array3,array4,array5,array6,array7);

     console.log(unique)
  
     const array8= [["Horror","The shining"],["comedy","fir hera feri"],["drama","titanic"],["fantasy","pans layrynth"]]

     const pairs = lodash.fromPairs(array8);
     console.log(pairs);
     
})


module.exports = router;
// adding this comment for no reason