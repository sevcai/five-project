var express = require('express');
var mysql = require('./mysql.js');
var router = express.Router();

//后台查询用户
router.post('/select', function(req, res, next) {
    let uid = req.body.uid;
    mysql.query('select * from guanzhu where uid1='+uid,function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send(JSON.stringify(result))
            res.end();
        }
    })
});