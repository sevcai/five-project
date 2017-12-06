var express = require('express');
var mysql = require('./mysql.js');
var router = express.Router();

//后台查询内容
router.get('/select', function(req, res, next) {
    mysql.query('select con.*,user.uname,category.cname from con,user,category where con.uid=user.uid and con.cid=category.cid',function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send(JSON.stringify(result))
            res.end();
        }
    })
});


//后台删除内容
router.post('/del', function(req, res, next) {
    let conid = req.body.conid;
    mysql.query(`delete from con where conid=${conid}`,function (err,result) {
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
