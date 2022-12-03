const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config');
const notif=require("./controllers/notif")
// const mysqlDb = require('./database/blockchain_analytics/db');
// const mssqlDb = require('./database/zebpay_mssql/db');
// const mysqlBlockchainAuditDb = require('./database/blockchain_audit/db');
// const walletWatcherMysqlDb = require('./database/walletwatcher_mysql/db');
// const ethsprayMysqlDb = require('./database/ethspray_mysql/db');

// const refillRoute = require('./routes/refill/index');
// const walletRoute = require('./routes/wallet/index');
// const userRoute = require('./routes/user/index');
// const monitorRoute = require('./routes/monitor/index');
// const walletsRoute = require('./routes/wallets/index');

// const authMiddleware = require('./middleware/authenticate');
// const service = require('./services/service');
// async function startProcess() {
    // try {
        // await mysqlDb.connect();
        // console.log('mysql db connected');

        // await walletWatcherMysqlDb.connect();
        // console.log('wallet-watcher mysql db connected');

        // await mssqlDb.poolConnect;
        // console.log('mssql db connected');

        // await mysqlBlockchainAuditDb.poolConnect;
        // console.log('blockchain-audit mysql db connected');

        // await ethsprayMysqlDb.poolConnect;
        // console.log('ethspray-mysql mysql db connected');

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(cors({ origin: true }));

        app.get('/', function (req, res) {
            console.log('app starting on port: ' + PORT)
            res.send('I am alive.');
        });

        app.listen(PORT, function () {
            console.log('app listening on port: ' + PORT);
            setInterval(notif.checkandSendNotification, 10000);
        });


