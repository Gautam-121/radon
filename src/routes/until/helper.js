
const printDate= function(){
    console.log(new Date)
}

const printMonth= function(){
    console.log( "1 june 2022")
}

const getBatchInfo = function(){
    console.log("Radon the topic of the day is node js module system")
} 

module.exports.printDate= printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;