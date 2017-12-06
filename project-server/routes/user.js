var express = require('express');
var mysql = require('./mysql.js');
var md5 = require('./md5.js');
var router = express.Router();
// var path = require('path');
// var multer  = require('multer');
// var xlsx=require('node-xlsx');


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './upload');
//     },
//     filename: function (req, file, cb) {
//
//         cb(null, new Date().getTime()+file.originalname);
//
//
//     }
// })
// var upload = multer({ storage: storage });

//上传
// router.post('/upload', upload.single('files'),function(req,res,next){
//     var xlsxPath=path.resolve(__dirname,"..",req.file.path);
//     var info=xlsx.parse(xlsxPath)[0].data;
//     info=info.filter(function (a) {
//         return a.length>0
//     })
//     var data=[];
//     for(var i=1;i<info.length;i++){
//         info[i][3]=md5('123456')
//         info[i][2]=String(info[i][2])
//         data.push(info[i])
//     }
//     console.log(data)
//     mysql.query("replace into user (number,name,phone,pass) values ?",[data],function (error,results) {
//         if(error){
//             console.log(error);
//             res.end();
//         }else{
//             if(results.affectedRows>0){
//                 res.end();
//             }
//         }
//     })
// })

//后台查询用户
router.get('/select', function(req, res, next) {
    mysql.query('select * from user',function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
                res.send(JSON.stringify(result))
                res.end();
        }
    })
});

//后台添加用户
router.post('/add', function(req, res, next) {
    let uname = req.body.uname;
    let email = req.body.email;
    let phone = req.body.phone;
    let upass = md5("123456");
    mysql.query(`replace into user (uname,email,phone,upass) values ('${uname}','${email}','${phone}','${upass}')`,function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send('ok');
            res.end()
        }
    })
});

//后台编辑用户
router.post('/edit', function(req, res, next) {
    let uid = req.body.uid;
    let uname = req.body.uname;
    let email = req.body.email;
    let phone = req.body.phone;
    mysql.query(`update user set uname='${uname}',email='${email}',phone='${phone}' where uid=${uid}`,function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send('ok');
            res.end()
        }
    })
});
//后台删除用户
router.post('/del', function(req, res, next) {
    let uid = req.body.uid;
    mysql.query(`delete from user where uid=${uid}`,function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send('ok');
            res.end()
        }
    })
});

//前台检查登录
router.post('/check', function(req, res, next) {
    let uname = req.body.uname;
    let upass = md5(req.body.upass);
    mysql.query("select * from user where (phone = '"+uname+"' or email = '"+uname+"') and upass = '"+upass+"'", function(err,result){
        let obj = {};
        if(err){
            obj.message = 'error';
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
                obj.message = 'error';
                res.send(JSON.stringify(obj));
            }
            res.end();
        }
    })

});

//前台注册
router.post('/reg', function(req, res, next) {
    console.log(req.body)
    let uname = req.body.uname;
    let email = req.body.email;
    let phone = req.body.phone;
    let upass = md5(req.body.upass);
    mysql.query(`replace into user (uname,email,phone,upass) values ('${uname}','${email}','${phone}','${upass}')`,function (err,result) {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.send('ok');
            res.end()
        }
    })
});

//前台检查用户名
router.post('/checkUser', function(req, res, next) {
    let phone = req.body.phone;
    mysql.query(`select * from user where phone = '${phone}'`, function(err,result){
        if(err){
            console.log(err)
            res.end();
        }else{
            if(result.length>0){
                res.send('exist')
            }else{
                res.send('no')
            }
            res.end();
        }
    })

});
module.exports = router;
