const express = require('express');


const router = express.Router();

router.get('/movie', function(req,res){
    const array =["Dhol","Golmaal","Raja babu","spiderman"];
    res.send(array)
})

router.get('/movie/:indexNumber', function(req, res){

    let array = ["Sholey","Bhagam-bhag","Spiderman","Raja babu"];

   
    const array1 = req.params.indexNumber

    if(array1<=3){
        res.send(array[array1])
    }else{
        res.send(" use a valid index")
    }
    
    
   
})

router.get('/films', function(req,res){

    const array = [ {
        id: 1,
        Name: 'The Shining'
       }, {
        id : 2,
        Name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]

       res.send(array)


       
})

router.get('/films/:filmid', function(req,res){
    const array =  [ {
        id: 1,
        Name: 'The Shining'
       }, {
        id : 2,
        Name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       },{
        id: 4,
        name: 'Finding Nemo'
       }];

       const array1 = req.params.filmid

      if(array1<=array.length){
        res.send(array[array1])
      }else{
        res.send("No movie exists with this id")


      }

})






module.exports = router;
// adding this comment for no reason