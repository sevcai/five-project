var express = require('express');
var mysql = require('./mysql.js');
var router = express.Router();

//后台查询留言
router.get('/select', function(req, res, next) {
    mysql.query('select message.*,user.uname,con.ctitle from message,user,con where message.uid=user.uid and message.conid=con.conid',function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send(JSON.stringify(result))
            res.end();
        }
    })
});


//后台删除留言
router.post('/del', function(req, res, next) {
    let mid = req.body.mid;
    mysql.query(`delete from message where mid=${mid}`,function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send('ok');
            res.end()
        }
    })
});

module.exports = router;
