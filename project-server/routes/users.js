var express = require('express');
var router = express.Router();
var mysql = require("./mysql.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/message', function(req, res, next) {
    var conid=req.query.conid;
    var page=req.query.page*3;
  mysql.query(`select message.*,user.uname from message join user on message.uid=user.uid where conid=${conid} order by mid desc limit ${page},3`,function (err,results) {
      if (err){
          console.log(err);
          res.end()
      }else {
          res.send(JSON.stringify(results))
      }
  })
});

router.post('/select', function(req, res, next) {
    var uid=req.body.uid;
    var conid=req.body.conid;
    var mcon=req.body.mcon;
    mysql.query(`insert into message (uid,conid,mcon) values (${uid},${conid},'${mcon}')`,function (err,results) {
        if (err){
            console.log(err)
        }else {
            if (results.affectedRows>0){
                var mid=results.insertId;
                mysql.query(`select message.*,user.uname from message join user on message.uid=user.uid where mid=${mid}`,function (err,results) {
                    res.send(JSON.stringify(results))
                })
            }
        }
    })
});

module.exports = router;
