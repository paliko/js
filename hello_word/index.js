const express = require("express");
// vytvorim instanci tridy express
const app = express(); //veskeroufunkcnots budu delat pres tenhleten objekt app
                        // muzu nazvat jakkoliv, express vyvojar hned vi

app.get('/',(req, res)=>{
    res.send("Hello world")
})

app.listen(7777, ()=>console.log("Server started"));