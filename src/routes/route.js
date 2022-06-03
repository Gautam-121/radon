const express = require('express');


const router = express.Router();

let player =[{
     name:"Rohit sharma",
     dob :"1/1/1995",
     gender:"male",
     city:"mumbai",
     sports:["cricket"]
},
{
     name:"M.S.Dhoni",
     dob:"1/1/1994",
     gender:"male",
     city:"chennai",
     sports:["football"]
},
{
     name:"Gautam Dhakate",
     dob:"11/8/2000",
     gender:"male",
     city:"Maharastra",
     sports:["vollyball"]
}

]

router.post('/test-me', function(req,res){
      let elem =req.body.element
      player.push(elem);
     res.send(player);
})
module.exports = router;
// adding this comment for no reason;