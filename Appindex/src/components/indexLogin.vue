<template>
    <section class="main">
        <div class="main-top">
            <div class="top">
                <div class="login-back" @click="back">
                    <img src="../assets/img/fanhui.png" alt="返回">
                </div>
                <div class="touxiang">
                    <div class="touxiang1">
                        <img src="../assets/img/touxiang.png" alt="头像">
                    </div>
                </div>
                <div class="only">
                    ONLYFORU
                </div>
                <div class="you">YOU.UINVESTMENT</div>
                <form action="">
                    <li>
                        <div class="Ucircle"></div>
                        <div class="user"><img src="../assets/img/user.png" alt=""></div>
                        <label for="uname" class="uname">Username</label>
                        <input id="uname" required name="uname" v-model="uname" @focus="focus()" type="text" placeholder="您可以输入邮箱或者手机号">
                        <div class="error" ref="uname">用户名不能为空</div>
                        <ul class="tips">
                            <div class="shade"></div>
                            <div class="tip">
                                <li class="xuanxiang1">
                                    139.com
                                </li>
                                <li class="xuanxiang">
                                    163.com
                                </li>
                                <li class="xuanxiang">
                                    qq.com
                                </li>
                                <li class="xuanxiang">
                                    qq.com
                                </li>
                                <li class="xuanxiang">
                                    126.com
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <div class="user"><img src="../assets/img/pass.png" alt=""></div>
                        <div class="Pcircle"></div>
                        <label for="pass" class="pass">Password</label>
                        <input type="password" id="pass" @focus="focus()" name="pass" v-model="upass" placeholder="在这里输入密码">
                        <div class="ask">?</div>
                        <div class="error" ref="upass">{{message}}</div>
                    </li>
                    <input type="button" value="开始投资" @click="submit">
                </form>
                <div class="form-back">
                </div>
                <div class="clear"></div>
            </div></div>
        <div class="bottom">
            <div class="sign">
                还没有帐号？&nbsp;&nbsp;&nbsp;<router-link to="/reg">立即注册</router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'indexLogin',
        data () {
            return {
                uname:'',
                upass:'',
                message:""/*密码提示信息*/
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            focus(){/*单表单获得焦点是的样式改变*/
                this.$refs.uname.style.display="none";
                this.$refs.upass.style.display="none";
                document.querySelector(".top").style.height=2.1+"rem";
                document.querySelector(".main-top").style.height=9+"rem";
                document.querySelector(".top").style.paddingTop=0.96+"rem";
                document.querySelector(".bottom").style.display="none";
                document.querySelector(".you").style.color="#8cb0fa";
                document.querySelector("form").style.bottom=-7.2+"rem";
                document.querySelector("form").style.height=4.1+"rem";
                document.querySelector("form>li").style.height=1.3+"rem";
                document.querySelector(".form-back").style.display="none";
            },
            submit(){/*表单提交*/
                var that=this;
                if(this.uname==""){
                    this.$refs.uname.style.display="block";
                    return;
                }
                if(this.upass==""){
                    this.$refs.upass.style.display="block";
                    this.message="密码不能为空";
                    return;
                }/*表单验证*/
                var uname=this.uname;
                var upass=this.upass;
                fetch('/ajax/user/check',{
                    method:"post",
                    headers:{"content-type":"application/x-www-form-urlencoded"},
                    body:"uname="+uname+"&upass="+upass,
                }).then(function (e) {
                    return e.json();
                }).then(function (e) {
                    if(e.message=="error"){
                        that.$refs.upass.style.display="block"
                        that.message="您输入的密码有误"
                    }else if(e.message=='success'){
                        sessionStorage.indexLogin=JSON.stringify(e);
                        that.$router.push('/')
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main{
        width: 100%;
        color: #fff;
    }
    .main-top{
        width:100%;
        height:8.3rem;
        position: relative;
        border:0px solid #0000ff;
        background: #f5f5f5;
    }
    .top{
        width:100%;
        height:7.4rem;
        position: absolute;
        top:0;
        left:0;
        background: url("../assets/img/loginback.png")no-repeat;
        background-size:100% 100%;
        z-index: 0;
        padding-top: 0.9rem;
    }
    .login-back{
        width:0.88rem;
        height:0.88rem;
        border-radius: 50%;
        overflow: hidden;
        position: fixed;
        top:0.42rem;
        left:0.15rem;

    }
    .login-back>img{
        width:0.88rem;
        height:0.88rem;
        display: block;
        margin:0.17rem auto;
    }
    .touxiang{
        width:3.08rem;
        height:3.08rem;
        background: rgba(38, 74, 151, 0.1);
        border-radius: 50%;
        margin:auto;
        overflow: hidden;
        /*box-shadow: 0 0 0 0.01rem rgba(255,255,255,0.8);*/
    }
    .touxiang1{
        background:  rgba(38, 74, 151, 0.2);
        width:2.56rem;
        height:2.56rem;
        border-radius: 50%;
        margin:0.22rem auto;
        overflow: hidden;
        /*box-shadow: 0 0 0 0.02rem rgba(255,255,255,0.8);*/
    }
    .touxiang1>img{
        width:2.02rem;
        height:2.02rem;
        display: block;
        margin:0.27rem auto;
    }

    .only{
        font-size: 0.2rem;
        letter-spacing: 0.08rem;
        font-family: sans-serif;
        color: #b8d1ff;
        margin-top: 0.24rem;
        text-align: center;
        width:100%;
        font-weight: bold;
    }
    .you{
        width:100%;
        text-align: center;
        font-size: 0.34rem;
        font-weight: bold;
        font-family: sans-serif;
        letter-spacing: 0.04rem;
    }
    .bottom{
        width:100%;
        height:5.02rem;
        background: #f5f5f5;
    }
    .sign{
        font-size: 0.24rem;
        color: #b0b0b0;
        position: absolute;
        bottom: 0.68rem;
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 0.02rem;
        font-family: "PingFang SC",sans-serif;
    }
    .sign>a{
        color: #b0b0b0;
    }
    .sign:before{
        content: "";
        display: block;
        width:5px;
        height:5px;
        border-radius: 50%;
        color: #558eff;
        border:3px solid #e1e7f3;
        float: left;
        margin-left: 1.9rem;
        margin-right: 0.1rem;
        margin-top: 0.12rem;
    }
    .sign:after{
        content: "";
        display: block;
        width:5px;
        height:5px;
        border-radius: 50%;
        color: #558eff;
        border:3px solid #e1e7f3;
        float: right;
        margin-right: 1.6rem;
        margin-top: 0.12rem;
    }
    form{
        width:7.02rem;
        height:4.58rem;
        background: #fff;
        position: absolute;
        bottom:-2.29rem;
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
        z-index: 5;
        border-radius: 0.15rem;
    }
    .form-back{
        width:6.66rem;
        height:0.5rem;
        position: absolute;
        background:#87b9f2;
        border-radius: 0.15rem;
        bottom:-2.5rem;
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
        z-index: 1;
    }
    form>li{
        width:6.52rem;
        height:1.4rem;
        margin:auto;
        margin-bottom: 0.05rem;
        border-bottom: 0.03rem solid #e5e5e5;
        position: relative;
    }
    form>li>input{
        letter-spacing: 0.04rem;
        font-size: 0.24rem;
        color: #d1d0d0;
        padding-left: 0.24rem;
        width:5rem;
        height:0.5rem;
        line-height: 0.5rem;
        outline: none;
        border:none;
        position: absolute;
        bottom:0;
        left:0.28rem;
        background: transparent;
    }
    .Pcircle{
        width:0.06rem;
        height:0.06rem;
        border:0.03rem solid #d1f4ee;
        background: #1ac8af;
        border-radius: 50%;
        position: absolute;
        bottom:0.18rem;
        left:0.16rem;
    }
    .Ucircle{
        width:0.06rem;
        height:0.06rem;
        border:0.03rem solid #d2e7fc;
        background: #2089f8;
        border-radius: 50%;
        position: absolute;
        bottom:0.18rem;
        left:0.16rem;
    }
    form>li>label{
        font-size: 0.22rem;
        letter-spacing: 0.03rem;
        position: absolute;
        top:0.44rem;
        left:0.73rem;
    }
    .uname{
        color: #2089f8;
    }
    .pass{
        color: #1bc9ae;
    }
    .user{
        width:0.43rem;
        height:0.43rem;
        border-radius: 50%;
        background:#fff;
        box-shadow: 0 0 0 0.03rem rgba(0,0,0,0.1);
        position: absolute;
        left:0.06rem;
        top:0.4rem;
    }
    .user>img{
        width:0.23rem;
        height:0.23rem;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
    }
    .error{
        position: absolute;
        bottom:-0.5rem;
        background: #fff;
        right:1.2rem;
        width:3rem;
        height:0.6rem;
        border-radius: 0.3rem;
        text-align: center;
        line-height: 0.6rem;
        color: #ffb025;
        font-size: 0.2rem;
        letter-spacing: 0.04rem;
        box-shadow: 0 0  0.05rem 0.01rem rgba(128,128,0,0.2);
        display: none;
        z-index: 3;
    }
    input[type=button]{
        border:none;
        outline: none;
        width:2.88rem;
        height:0.66rem;
        position: absolute;
        background: #3874eb;
        bottom:0.44rem;
        letter-spacing: 0.04rem;
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
        border:0.01rem solid #7aa8ff;
        font-size: 0.34rem;
        font-weight: bold;
        color: #98b5f1;
        border-radius: 0.29rem;
    }
    .ask{
        width:0.32rem;
        height:0.32rem;
        border-radius: 50%;
        font-weight: bold;
        color: #fff;
        background: #2088f9;
        text-align: center;
        line-height: 0.32rem;
        font-size: 0.2rem;
        position: absolute;
        right:0.05rem;
        bottom:0.16rem;
    }
    .tips{
        width:4.72rem;
        height:0.6rem;
        background: #346bda;
        position: absolute;
        bottom:-0.6rem;
        right:-0.38rem;
        overflow: hidden;
        display: none;
    }
    .tip{
        width:5.5rem;
        height:0.6rem;
        background: #346bda;
        position: absolute;
        left: 0;
        top:0;
    }
    .xuanxiang1{
        width:1.26rem;
        height:0.5rem;
        border-radius: 0.2rem;
        background: #fff;
        color: #6e90e3;
        font-size: 0.2rem;
        margin-right: 0.06rem;
        font-weight: bold;
        text-align: center;
        line-height: 0.5rem;
    }
    .xuanxiang{
        width:1.26rem;
        height:0.5rem;
        border-radius: 0.2rem;
        background: #4885ff;
        color: #e2eaff;
        font-size: 0.2rem;
        margin-right: 0.06rem;
        font-weight: bold;
        text-align: center;
        line-height: 0.5rem;
    }
    .tip>li{
        float: left;
    }
    .shade{
        width:100%;
        height:100%;
        opacity: 0;
        position: absolute;
        left:0;
        top:0;
        z-index: 2;
    }

</style>
