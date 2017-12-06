var express = require('express');
var mysql = require('./mysql.js');
var md5 = require('./md5.js');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/checkLogin', function(req, res, next) {
    let aname = req.body.aname;
    let apass = md5(req.body.apass);
    mysql.query("select * from admin where aname = '"+aname+"' and apass = '"+apass+"'", function(err,result){
        let obj = {};
        if(err){
            obj.message = 'err';
            res.send(JSON.stringify(obj));
            res.end();
        }else{
            if(result.length>0){
                obj.message = 'success';
                for(let i in result[0]){
                    obj[i] = result[0][i];
                }
                res.send(JSON.stringify(obj));
            }else{
                obj.message = 'err';
                res.send(JSON.stringify(obj));
            }
            res.end();
        }
    })

});


module.exports = router;
