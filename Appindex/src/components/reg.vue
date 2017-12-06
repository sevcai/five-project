<template>
    <div class="reg">
        <div class="bag">
            <Goback></Goback>
            <div class="basics">
                <div class="one">01</div>
                <div class="basic">基本信息完善</div>
                <div class="eng">Basic Information</div>
            </div>
            <form action="">
                <div class="progress">
                    <div class="step-one">
                        <div class="step-one-top"></div>
                        <div class="step-one-bot"></div>
                        <div class="step-one-mid">
                            <div class="step-circle"></div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="step-two"></div>
                    <div class="line"></div>
                    <div class="step-three"></div>
                </div>
                <li>
                    <div class="Ucircle"></div>
                    <div class="user"><img src="../assets/img/user.png" alt=""></div>
                    <label for="uname" @input="aa" class="uname">Mobile</label>
                    <input id="uname" @focus="focus" name="phone" @input="aa"  v-model="phone" type="text" placeholder="请输入您的手机号">
                    <div class="error" ref="phone">{{message1}}</div>
                    <ul class="tips">
                        <div class="shade"></div>
                    </ul>
                </li>
                <li>
                    <div class="Ucircle"></div>
                    <div class="user"><img src="../assets/img/user.png" alt=""></div>
                    <label for="email" class="uname">E-mail</label>
                    <input id="email" @focus="focus" name="email"  v-model="email" type="text" placeholder="请输入您的邮箱">
                    <div class="error" ref="email">邮箱不能为空</div>
                </li>
                <li>
                    <div class="user"><img src="../assets/img/pass.png" alt=""></div>
                    <div class="Pcircle"></div>
                    <label for="pass" class="pass">Password</label>
                    <div class="error" ref="pass">密码不能为空</div>
                    <input type="password" @focus="focus"  id="pass" name="pass" v-model="pass" placeholder="在这里输入密码">
                </li>
                <li>
                    <div class="user"><img src="../assets/img/pass.png" alt=""></div>
                    <div class="Pcircle"></div>
                    <label for="pass1" class="pass">Password</label>
                    <div class="error"  ref="pass1" >{{message}}</div>
                    <input type="password"  id="pass1" name="pass1"v-model="pass1" placeholder="再次输入密码确认">
                </li>
                <input type="button" value="完成" @click="wancheng">
            </form>
            <div class="form-back">
            </div>
            <div class="clear"></div>
        </div>
        <div class="bottom">
            <div class="sign">
                已有帐号？&nbsp;&nbsp;&nbsp;<router-link to="/login">立即登录</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Goback from "@/components/goback";
    export default {
        name:"reg",
        components:{Goback},
        data(){
            return {
                phone:"",
                email:"",
                pass:"",
                pass1:"",
                message:"",//密码提示信息
                message1:""//手机号提示信息
            }
        },
        methods:{
            focus(){/*让所有的error提示在表单获得焦点后消失*/
                for(var i=0; i<document.querySelectorAll(".error").length;i++){
                    document.querySelectorAll(".error")[i].style.display="none"
                }
            },
            aa() {/*input事件，判断该账号是否已经注册*/
                var that=this;
                fetch('/ajax/user/checkUser', {
                    method: "post",
                    headers: {"content-type": "application/x-www-form-urlencoded"},
                    body: "phone=" + this.phone,
                }).then(function (e) {
                    return e.text();
                }).then(function (e) {
                    if (e == "exist") {
                        that.$refs.phone.style.display="block";
                        that.message1="该号码已经注册"
                    } else if (e == "no") {
                        console.log("合格")
                    }
                })
            },
            wancheng(){/*点击提交的事件*/
                if(this.phone==""){
                    this.$refs.phone.style.display="block";
                    this.message1="手机号不能为空";
                    return;
                }
                if(this.email==""){
                    this.$refs.email.style.display="block";
                    return;
                }
                if(this.pass==""){
                    this.$refs.pass.style.display="block";
                    return;
                }
                if(this.pass1==""){
                    this.$refs.pass1.style.display="block";
                    this.message="密码不能为空"
                    return;
                }
                if(this.pass!=this.pass1){
                    this.$refs.pass1.style.display="block";
                    this.message="两次密码必须相同"
                    return;
                }/*以上if用来判断表单是否为空*/
                var email = this.email;
                var upass = this.pass;
                var phone = this.phone;
                var that=this;
                fetch('/ajax/user/reg', {
                    method: "post",
                    headers: {"content-type": "application/x-www-form-urlencoded"},
                    body: "email=" + this.email + "&upass=" + this.pass + "&phone=" + this.phone,
                }).then(function (e) {
                    return e.text();
                }).then(function (e) {
                    if (e == "ok") {
                        that.$router.push('/login')
                    }
                })/*fetch提交*/
            },
        }

    }
</script>
<style scoped>
    .reg{
        width: 100%;
        height: 100%;
    }
    .bag{
        width: 100%;
        height: 8.3rem;
        position: relative;
        background: url("../assets/img/loginback.png") no-repeat center/cover;

    }
    .basics{
        width: 100%;
        text-align: center;
        text-shadow: 0.01rem 0 0.01rem #1bc858;
        color: #fff;
        position: absolute;
        top: 1.42rem;
        left: 0;
        font-weight: bold;
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
        z-index: 3;
        display: none;
    }
    .one{
        width: 100%;
        height: 0.92rem;
        line-height: 0.92rem;
        font-size: 0.92rem;
        letter-spacing: 0.16rem;
        font-family: "San Francisco Display";
    }
    .basic{
        width: 100%;
        height: 0.48rem;
        font-size: 0.48rem;
        line-height: 0.48rem;
        margin-top: 0.46rem;
        letter-spacing: 0.05rem;
        font-family: "Adobe 黑体 Std R";
    }
    .eng{
        width: 100%;
        height: 0.26rem;
        margin-top: 0.22rem;
        letter-spacing: 0.04rem;
        font-size: 0.26rem;
        line-height: 0.26rem;
        font-family: "San Francisco Display";
    }
    .progress{
        width: auto;
        height: 0.33rem;
        margin-left: 0.73rem;
        margin-top: 0.18rem;
    }
    .step-one{
        width: 0.33rem;
        height: 0.33rem;
        float: left;
        border: 1px solid #a9a9a9;
        border-radius: 50%;
        margin-right: 0.06rem;
        position: relative;
    }
    .step-one-mid{
        width: 0.19rem;
        height: 0.19rem;
        border-radius: 50%;
        border: 2px solid #666666;
        margin: 0.02rem auto;
    }
    .step-circle{
        width: 0.09rem;
        height: 0.09rem;
        border-radius: 50%;
        background: #3874eb;
        margin: 0.05rem auto;
    }
    .line{
        width: 2.16rem;
        height: 0.02rem;
        background: #000;
        float: left;
        margin-top: 0.18rem;
        margin-right: 0.15rem;
    }
    .step-two{
        width: 0.12rem;
        height: 0.12rem;
        border-radius: 50%;
        border: 2px solid #7f7f7f;
        float: left;
        margin-top: 0.09rem;
        margin-right: 0.15rem;
    }
    .step-three{
        width: 0.12rem;
        height: 0.12rem;
        border-radius: 50%;
        border: 2px solid #7f7f7f;
        float: left;
        margin-top: 0.09rem;
    }
    .step-one-top{
        width: 0.07rem;
        height: 0.03rem;
        position: absolute;
        background: #fff;
        top: -0.02rem;
        left: 0.13rem;
    }
    .step-one-bot{
        width: 0.07rem;
        height: 0.03rem;
        position: absolute;
        background: #fff;
        bottom: -0.01rem;
        left: 0.13rem;
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
        bottom: 0.5rem;
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
        margin-right: 1.8rem;
        margin-top: 0.12rem;
    }
    form{
        width:7.02rem;
        height:7.65rem;
        background: #fff;
        position: absolute;
        bottom:-3.7rem;
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
        bottom:-3.85rem;
        left:0;
        right:0;
        margin-left: auto;
        margin-right: auto;
        z-index: 1;
    }
    form>li{
        width:6.52rem;
        height:1.34rem;
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

</style>
