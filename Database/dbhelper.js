const db=require("./db")

module.exports.isPresent= async function(rootAddress){
    try{
        const query=`select address from notif where address='${rootAddress}'`;
        const res=await db.executeQuery(query)
        if(res==''||res==null){
            return false;
        }else{
            return true;
        }
    }catch(err){
        return false;
    }
}