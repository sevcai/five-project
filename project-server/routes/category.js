var express = require('express');
var mysql = require('./mysql.js');
var router = express.Router();

//后台查询分类
router.get('/select', function(req, res, next) {
    mysql.query('select * from category',function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send(JSON.stringify(result))
            res.end();
        }
    })
});

//后台添加分类
router.post('/add', function(req, res, next) {
    let cname = req.body.cname;
    mysql.query(`replace into category (cname) values ('${cname}')`,function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send('ok');
            res.end()
        }
    })
});

//后台编辑分类
router.post('/edit', function(req, res, next) {
    let cid = req.body.cid;
    let cname = req.body.cname;
    mysql.query(`update category set cname='${cname}' where cid=${cid}`,function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send('ok');
            res.end()
        }
    })
});
//后台删除分类
router.post('/del', function(req, res, next) {
    let cid = req.body.cid;
    mysql.query(`delete from category where cid=${cid}`,function (err,result) {
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
