const compound = require("../compound")
const push = require("../push")
// const add=["0x1d161Ae13f9C31773B9ebC329542A06c7Be4C8dA","0x032e76a97513d6Fba413B9AA908B663424727e05"]
const mysql = require("mysql2");
const db = require("../Database/db");
const { query } = require("express");
const res = require("express/lib/response");
const moment = require('moment')

async function getaddresses() {
    try {
        let query = `Select * from notif where isActive=1`
        const res = await db.executeQuery(query)
        // console.log(res);
        return res;
    } catch (err) {
        console.log(err);
        return {};
    }
}

async function updatestatus(data, notifSent) {
    try {
        let query
        let query1 = `update notif set last_notif ='${moment().format('YYYY-MM-DD HH:mm:ss')}', sendNotif=1 where id=${data.id}`
        let query2 = `update notif set sendNotif =0  where id=${data.id} and sendNotif=1`
        if (notifSent) {
            query = query1;
        }
        else {
            query = query2
        }
        const res = await db.executeQuery(query)
    } catch (err) {
        console.log(err)
    }
}

module.exports.checkandSendNotification=async function(){
    try {
        let add = await getaddresses();
        for (let i = 0; i < add.length; i++) {
            let res = await compound.checkisLiquidatable(add[i].address);
            // console.log(add[i].address);
            console.log("Add:- ", add[i].address, " Response:-",res)
            if (res) {
                if (add[i].sendNotif === 0) {
                    await push.sendNotification(add[i].address)
                    await updatestatus(add[i], true)
                }
            }else{
            await updatestatus(add[i], false)
            }
        }
    } catch (err) {
        console.log(err)
    }
}

// checkandSendNotification();