<template>
    <div class="center">
        <div class="img">
            <!--<img src="../assets/img/banner.png" alt="">-->
            <ul class="share">
                <li><router-link to="/share"><img src="../assets/img/sa_03.png" alt=""></router-link></li>
                <li><a href=""><img src="../assets/img/sa_05.png" alt=""></a></li>
            </ul>
            <div class="center-name">
                <div class="center-photo">
                    <div class="center-photo-one">
                        <div class="center-photo-two">
                            <img src="../assets/img/1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="center-name-right">

                </div>
            </div>
        </div>
        <main>
            <div class="money">
                <button class="add">充值</button>
                <button class="des">提现</button>
            </div>

            <!--钱包-->
            <a class="wallet">
                <div class="wallet-top">
                    <div class="wallet-top-left"></div>
                    <div class="wallet-top-right">
                        <div class="wallet-top-right-top">
                            钱包
                        </div>
                        <div class="wallet-top-right-bot">
                            TATAL ASSETS
                        </div>
                    </div>
                </div>
                <div class="wallet-mid">
                    <span class="num">2,166,035.07</span>
                    <span class="rmb">RMB</span>
                </div>
                <ul class="wallet-bot">
                    <li class="wallet-bot-all">
                        <div class="wallet-bot-all-circle"></div>
                        <span class="wallet-bot-all-all">总收益</span>
                        <span class="wallet-bot-all-num">+52,135.21</span>
                    </li>
                    <li class="wallet-bot-all">
                        <div class="wallet-bot-all-circle"></div>
                        <span class="wallet-bot-all-all">昨日收益</span>
                        <span class="wallet-bot-all-num">+1,026.1</span>
                    </li>
                </ul>
            </a>
            <!--内容-->
            <div class="content">
                <div class="wallet-top">
                    <div class="wallet-top-left"></div>
                    <div class="wallet-top-right">
                        <div class="wallet-top-right-top">
                            内容
                        </div>
                        <div class="wallet-top-right-bot">
                            WONDERFUL COTENT
                        </div>
                    </div>
                </div>
                <ul class="content-bot">
                    <li>
                        <a href="javascript:;">
                            <div class="content-bot-circle"></div>
                            <span class="wallet-bot-all-all">关注</span>
                            <span class="wallet-bot-all-num">13</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="content-bot-circle collect"></div>
                            <span class="wallet-bot-all-all">收藏</span>
                            <span class="wallet-bot-all-num collect1">62</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="content-bot-circle publish"></div>
                            <span class="wallet-bot-all-all">发布</span>
                            <span class="wallet-bot-all-num publish1">0</span>
                        </a>
                    </li>
                </ul>
            </div>
            
            <!--会员 券-->
            <ul class="member">
                <li>
                    <a href="javascript:;">
                        <img src="../assets/img/sa_10.png" alt="" class="member-img">
                        <span class="my-member">我的会员</span>
                        <img src="../assets/img/sa_19.png" alt="" class="more">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../assets/img/sa_15.png" alt="" class="member-img">
                        <span class="my-member">我的券</span>
                        <img src="../assets/img/sa_19.png" alt="" class="more">
                    </a>
                </li>
                <li>
                    <router-link to="/money">
                        <img src="../assets/img/sa_13.png" alt="" class="member-img">
                        <span class="my-member">我的理财</span>
                        <img src="../assets/img/sa_19.png" alt="" class="more">
                    </router-link>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../assets/img/sa_17.png" alt="" class="member-img">
                        <span class="my-member">客服</span>
                        <img src="../assets/img/sa_19.png" alt="" class="more">
                    </a>
                </li>
            </ul>
        </main>
        <div class="black"></div>
    </div>
</template>
<script>
    export default {
        name: "MyCenter"
    }
</script>
<style scoped>
    .black{
        width: 100%;
        height: 1.24rem;
    }
    .center{
        height: 100%;
        width: 100%;
    }
    .img{
        width: 100%;
        height: 3.26rem;
        position: relative;
        margin-bottom: 0.24rem;
        background: url("../assets/img/banner.png") no-repeat center/cover;
        /*overflow: hidden;*/
    }
    /*.img>img{*/
        /*width: 110%;*/
        /*height: 110%;*/
    /*}*/
    .share{
        width: 1.33rem;
        height: 0.51rem;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 0.65rem;
        right: 0.4rem;
    }
    .share>li{
        width: 0.51rem;
        height: 0.51rem;
        border-radius: 50%;
    }
    .share>li>a{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
    }
    .share>li>a>img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    main{
        width: 93.6%;
        height: 100%;
        margin: 0 auto;
    }
    .money{
        width: auto;
        height: 0.6rem;
        margin-bottom: 0.24rem;
        display: flex;
        justify-content: space-between;
    }

    /*头像*/
    .center-name{
        width: auto;
        height: 1.7rem;
        position: absolute;
        top: 1.3rem;
        left: 0;
    }
    .center-photo{
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 50%;
        float: left;
        background: rgba(255,255,255,0.1);
        margin-left: 0.34rem;
    }
    .center-photo-one{
        width: 1.46rem;
        height: 1.46rem;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        margin: 0.12rem auto;
        position: relative;
    }
    .center-photo-two{
        width: 1.26rem;
        height: 1.26rem;
        border-radius: 50%;
        background: rgba(255,255,255,0.5);
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
    }
    .center-photo-two>img{
        width: 1.04rem;
        height: 1.04rem;
        border-radius: 50%;
        position: absolute;
        top: 0.11rem;
        left: 0.11rem;
    }

    button{
        width: 47.7%;
        height: 100%;
        outline: none;
        border: none;
        border-radius: 0.4rem;
        font-size: 0.34rem;
        letter-spacing: 0.14rem;
    }
    .add{
        border: 2px solid #aff9d5;
        background: #2ce48b;
    }
    .des{
        background: #2cbfe4;
    }
    /*钱包*/
    .wallet{
        width: 100%;
        height: 1.83rem;
        border-radius: 0.1rem;
        background: #fff;
        display: block;
        margin-bottom: 0.24rem;
        box-shadow: 0 0 10px 0 #e8e8e8;
    }
    .wallet-top{
        width: auto;
        height: 0.45rem;
        padding-top: 0.2rem;
        padding-left: 0.25rem;
        margin-bottom: 0.34rem;
    }
    .wallet-top-left{
        width: 0.06rem;
        height: 0.45rem;
        background: #2b7afd;
        float: left;
        margin-right: 0.12rem;
        border-radius: 0.1rem;
    }
    .wallet-top-right{
        width: auto;
        height: 0.45rem;
        float: left;
    }
    .wallet-top-right-top{
        width: auto;
        height: 0.28rem;
        font-size: 0.28rem;
        letter-spacing: 0.02rem;
        margin-bottom: 0.04rem;
        color: #585858;
        line-height: 0.28rem;
    }
    .wallet-top-right-bot{
        width: auto;
        height: 0.18rem;
        font-size: 0.18rem;
        color: #dddddd;
        line-height: 0.18rem;
    }
    .wallet-mid{
        width: auto;
        height: 0.37rem;
        line-height: 0.37rem;
        font-size: 0.46rem;
        letter-spacing: 0.04rem;
        padding-bottom: 0.45rem;
        border-bottom: 1px solid #e7dbf3;
    }
    .num{
        width: auto;
        height: 100%;
        display: block;
        color: #23ce6f;
        font-weight: bold;
        margin-left: 0.24rem;
        float: left;
    }
    .rmb{
        width: auto;
        height: 0.3rem;
        line-height: 0.3rem;
        float: right;
        font-size: 0.3rem;
        color: #90e0b5;
        font-weight: bold;
        padding-right: 0.24rem;
        margin-top: 0.1rem;
    }
    .wallet-bot{
        width: auto;
        height: 0.4rem;
        line-height: 0.4rem;
        font-weight: bold;
        letter-spacing: 0.03rem;
        font-size: 0.12rem;
        margin-top: 0.1rem;
    }
    .wallet-bot-all{
        width: 50%;
        height: 100%;
        float: left;
    }
    .wallet-bot-all-circle{
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background: #80affe;
        margin-right: 0.12rem;
        margin-top: 0.16rem;
        float: left;
        margin-left: 0.24rem;
    }
    .wallet-bot-all-all{
        color: #585858;
        margin-right: 0.14rem;
    }
    .wallet-bot-all-num{
        color: #68a2ff;
    }


    /*内容*/
    .content{
        width: 100%;
        height: 1.41rem;
        background: #fff;
        border-radius: 0.1rem;
        box-shadow: 0 0 10px 0 #e8e8e8;
    }
    .content-bot{
        width: 100%;
        height: 0.26rem;
        margin-top: 0.44rem;
        line-height: 0.26rem;
        letter-spacing: 0.04rem;
        font-weight: bold;
    }
    .content-bot>li{
        width: 33.3333%;
        height: 100%;
        font-size: 0.26rem;
        float: left;
    }
    .content-bot-circle{
        margin-right: 0.14rem;
        margin-left: 0.24rem;
        margin-top: 0.1rem;
        background: #4d90fd;
        float: left;
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
    }
    .content-bot>li>a>.wallet-bot-all-all{
        color: #8d8d8d;
    }
    .content-bot>li>a>.wallet-bot-all-num{
        color: #64d59e;
    }
    .collect{
        background: #f7d6a9;
    }
    .content-bot>li>a>.collect1{
        color: #f1ba70;
    }
    .publish{
        background: #a6c9ff;
    }
    .content-bot>li>a>.publish1{
        color: #6aa5ff;
    }

    /*会员券*/
    .member{
        width: 100%;
        height: 100%;
        margin-top: 0.24rem;
        margin-bottom: 0.24rem;
    }
    .member>li{
        width: 100%;
        height: 0.9rem;
        margin-bottom: 0.1rem;
        background: #fff;
        border-radius: 0.1rem;
        line-height: 0.9rem;
        font-size: 0.26rem;
        font-weight: bold;
        letter-spacing: 0.04rem;
        box-shadow: 0 0 10px 0 #e8e8e8;
    }
    .member-img {
        width: 0.58rem;
        height: 0.58rem;
        margin-top: 0.16rem;
        margin-right: 0.2rem;
        margin-left: 0.24rem;
        background: pink;
        border-radius: 50%;
        float: left;
    }
    .member>li>a{
        width: 100%;
        height: 100%;
        display: block;
    }
    .my-member{
        color: #8d8d8d;
    }
    .more{
        width: 0.62rem;
        height: 0.5rem;
        margin-top: 0.4rem;
        float: right;
        background: pink;
    }
</style>
