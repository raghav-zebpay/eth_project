const mysql = require("mysql2");
const config = require("../config");

const db = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password, // ENTER YOUR SQL ROOT PASSWORD...
  database: config.db.database ,
});

db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("sql connected");
  });


  module.exports.executeQuery= async function(query, values = null) {
    // console.debug(`query: `, query)
    return new Promise((resolve, reject) => {
        try {
            db.query(query, values, (e, r, f) => {
                if (e) {
                    reject(e)
                }
                else {
                    //console.debug(r);
                    resolve(r)
                }
            });
        }
        catch (ex) {
            reject(ex)
        }
    })
}