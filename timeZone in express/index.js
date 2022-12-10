const express = require('express');
const app = express();
const date = new Date();
const port = process.env.PORT || 3000;
let america = date.toLocaleString('en',{timeZone:'America/New_York'});
let africa = date.toLocaleString('en',{timeZone:'Africa/Bangui'});
let australia = date.toLocaleString('en',{timeZone:'Australia/Canberra'});
let germany = date.toLocaleString('en',{timeZone:'Europe/Berlin'});
let greece = date.toLocaleString('en',{timeZone:'Europe/Athens'});
app.get('/gettime/:country',(req, res)=>{
    const country=req.params.country
    switch(country){
        case "america": return res.send(america);
        case "africa":  return res.send(africa)
        case "australia":  return res.send(australia)
        case "germany":  return res.send(germany)
        case "greece":  return res.send(greece)
    }
    res.send(country)
})
app.listen(port,()=>{
    console.log("server is listening on port",port);
})
