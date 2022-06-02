const trim= function(){
    const c= "          Gautamdhakate             "
    console.log(c.trim())
}

const changetoLowerCase =function(){
    const a= "HELLO MY NAME IS GAUTAM DHAKATE"
    console.log(a.toLowerCase())
}

const changetoUpperCase = function(){
    const b= "hello my name is gautam dhakate"
    console.log(b.toUpperCase());
}

module.exports.trim=trim;
module.exports.changetoLowerCase=changetoLowerCase;
module.exports.changetoUpperCase=changetoUpperCase;