const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const mysql = require("mysql2");
const config=require("./config")

const app=express();
// app.use(cors({ origin: true }));
// app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({ origin: true }));

app.get('/',function(req,res){
    console.log("Hello world");
    res.send(`<h1>Welcome to Best Deals Dashboard</h1>`);
})


// app.get('/', function (req, res) {
//     console.log('app starting on port: ' + PORT)
//     res.send('I am alive.');
// });

// app.get('/', function (req, res) {
//     console.log('app starting on port: ' + config.PORT)
//     res.send('I am alive.');
// });

app.listen(config.PORT, function(){
    console.log("server up and running")
})

// app.listen(config.PORT, function () {
//     console.log('app listening on port: ' + config.PORT);
// });
