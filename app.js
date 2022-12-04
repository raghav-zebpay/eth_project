const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config');
const notif=require("./controllers/notif")
const db=require("./Database/db")
const dbhelper=require("./Database/dbhelper")



        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(cors({ origin: true }));

        app.get('/', function (req, res) {
            console.log('app starting on port: ' + PORT)
            res.send('I am alive.');
        });

        app.post("/register",async function(req,res){
            try{
            const add=req.body.userAddress;
            const token=req.body.token;
            let isPresent=await dbhelper.isPresent(add);
            if(!isPresent){
            const query=`insert into notif (address, token, sendNotif, isActive) values ('${add}','${token}', 0, 1)`;
            const result = await db.executeQuery(query);
            res.send(204)
            }else{
                res.send(200);
            }
            }catch(err){
                res.send(400)
            }
        })

        app.listen(PORT, function () {
            console.log('app listening on port: ' + PORT);
            setInterval(notif.checkandSendNotification, 10000);
        });


