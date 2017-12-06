<template>
    <div>
        <div class="big">
            <header>
                <div class="shareBox">
                    <div class="sTop">
                            <div class="Back" @click="back()">
                                <div class="in-circle">
                                    <img src="../assets/img/back.png" alt="">
                                </div>
                            </div>
                        <div class="sTitle">
                            <div class="heng"></div>
                            <span>易方达安心回报</span>
                            <div class="heng1"></div>
                        </div>
                        <div class="Share" @click="share()">
                            <div class="in-circle1">
                                <img src="../assets/img/share.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="fenge">
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                    </div>
                </div>
                <div class="typeBox">
                    <div class="top">
                        <div class="zhu"></div>
                        <div class="type">
                            <div class="chineseName">股票型</div>
                            <div class="enName">HIGHER-RISK</div>
                        </div>
                        <div class="risk">中高风险</div>
                    </div>
                    <div class="bottom">
                        <div class="left">
                            <div class="newVal">
                                <div class="circle"></div>
                                <div class="new">最新净值</div>
                            </div>
                            <div class="val">1.2115</div>
                        </div>
                        <div class="left">
                            <div class="newVal">
                                <div class="circle"></div>
                                <div class="new">日涨跌幅</div>
                            </div>
                            <div class="precent">
                                <div>-0.41</div>
                                <div>%</div>
                       </div>
                    </div>
                </div>
                </div>
            </header>
            <div class="black"></div>
            <section>
                <div class="profitBox">
                    <div class="top top1">
                        <div class="zhu"></div>
                        <div class="type">
                            <div class="chineseName">收益率走势</div>
                            <div class="enName">TREASURY YIELDS FOR SOME TIME</div>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="time" @click="click($event)" v-for="item in data">{{item.title}}</div>
                    </div>
                    <div class="trend">
                        <div class="bottom1">
                            <img src="../assets/img/table.png" alt="">
                        </div>
                        <div class="bottom2">
                            <span>10-17</span>
                            <span>近期年化收益走势</span>
                            <span>11-17</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="projectBox">
                    <div class="top top2">
                        <div class="zhu"></div>
                        <div class="type">
                            <div class="chineseName">产品详情</div>
                            <div class="enName">PRODUCT DETAILS</div>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="proType" @click="click1($event)" v-for="item in data1">{{item.title}}</div>
                    </div>
                    <div class="bottom3">
                        <div class="row">
                            <div class="rowType">基金类型</div>
                            <div class="rowType rowType1">短期型</div>
                        </div>
                        <div class="row">
                            <div class="rowType">管理公司</div>
                            <div class="rowType rowType1">民生加银基金管理有限公司</div>
                        </div>
                        <div class="row">
                            <div class="rowType">基金规模</div>
                            <div class="rowType rowType1">30.08亿</div>
                        </div>
                        <div class="row">
                            <div class="rowType">成立时间</div>
                            <div class="rowType rowType1">2013-04-25</div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="footer">
                <div class="try">收益试算</div>
                <div class="try">申请购买</div>
            </div>
        </div>
        <div class="zhe" @click="zhe($event)">
            <div class="share1">
                <div class="in-circle1">
                    <img src="../assets/img/share.png" alt="">
                </div>
            </div>
            <div class="methodBox">
                <div class="method">
                    <img src="../assets/img/QQ.png" alt="">
                </div>
                <div class="method">
                    <img src="../assets/img/WEIXIN.png" alt="">
                </div>
                <div class="method">
                    <img src="../assets/img/QQKONGJIAN.png" alt="">
                </div>
                <div class="method">
                    <img src="../assets/img/duanxin.png" alt="">
                </div>
                <div class="method">
                    <img src="../assets/img/pengyouquan.png" alt="">
                </div>
                <div class="method">
                    <img src="../assets/img/weibo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '@/assets/js/jquery-3.2.1.js'
    export default {
        name: 'detail',
        data() {
            return {
                data:[
                    {title:'本月'},
                    {title:'季度'},
                    {title:'半年'},
                    {title:'本年'}
                ],
                data1:[
                    {title:'产品资料'},
                    {title:'风险收益'},
                    {title:'交易规则'}
                ]
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
            click(event){
                let timeone=event.currentTarget
                $(".middle>.time").css({background:"#c5dfff"})
                $(timeone).css({background:'#55a6ff'})
            },
            click1(event){
                let proTypeone=event.currentTarget
                $(".middle>.proType").css({background:"#c5dfff"})
                $(proTypeone).css({background:'#55a6ff'})
            },
            share(){
                $(".big").css({filter:'blur(2px)'});
                $(".zhe").show()
            },
            zhe(event){
                let zhe=event.currentTarget;
                $(".big").css({filter:'none'});
                $(zhe).hide()
            }
        }
    }
</script>
<style scoped>
    html,body{
        width: 100%;
        height: 100%;
    }
    /*遮罩*/
    .zhe{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        left:0;
        background:rgba(255,255,255,0.8);
        z-index: 2;
        display: none;
    }
    /*分享*/
    .share1{
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
        background: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        position: absolute;
        right:0.24rem;
        top:0.6rem;
    }
    .methodBox{
        width:0.85rem;
        height:5.6rem;
        position: absolute;
        right: 0.2rem;
        top:1.87rem;
        display: flex;
        flex-wrap: wrap;
    }
    .method{
        width:0.8rem;
        height: 0.8rem;
        border-radius: 50%;
    }
    .method>img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    header{
        width: 100%;
        height: 3.3rem;
        background:#2c69e4;
        position:fixed;
        left:0;
        top:0;
        z-index: 1;
    }
    section{
        width: 100%;
        height: auto;
        background: #f5f5f5;
    }
    .shareBox{
        width:93.6%;
        height:2rem;
        margin:auto;
        position: relative;
        overflow: hidden;
    }
    .Back{
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
        background: rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        margin-top:0.6rem;
    }
    .in-circle{
        width: 0.4rem;
        height: 0.4rem;
        background: #3f79ee;
        border: 0.02rem solid #c9d1fd;
        border-radius: 50%;
        margin: 0 auto;
        position: relative;
    }
    .in-circle>img{
        width: 0.32rem;
        height: 0.32rem;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    /*分享*/
    .Share{
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
        background: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top:0.6rem;
    }
    .in-circle1{
        width: 0.58rem;
        height: 0.58rem;
        background: #fbfbfb;
        border-radius: 50%;
        margin: 0 auto;
        position: relative;
    }
    .in-circle1>img{
        width: 0.26rem;
        height: 0.26rem;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    .fenge{
        width: 100%;
        height: 0.01rem;
        background: #fff;
        position: absolute;
        left:0;
        bottom:0.37rem;
    }
    .circle1{
        width:0.05rem;
        height: 0.05rem;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left:0;
        top:0;
        bottom:0;
        margin-top: auto;
        margin-bottom: auto;
    }
    .circle2{
        width:0.05rem;
        height: 0.05rem;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        right:0;
        top:0;
        bottom:0;
        margin-top: auto;
        margin-bottom: auto;
    }
    /*头部标题*/
    .sTitle{
        width:75.4%;
        height: 0.68rem;
        position: absolute;
        top:0.6rem;
        left:0.7rem;
    }
    .sTitle>span{
        color: #fff;
        font-size:0.3rem;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    .heng{
        width: 20px;
        height: 1px;
        background:#4b86fe;
        border-left:2px solid #fff;
        border-right:2px solid #fff;
        position: absolute;
        top:0;
        left:0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .heng1{
        width: 20px;
        height: 1px;
        background:#4b86fe;
        border-left:2px solid #fff;
        border-right:2px solid #fff;
        position: absolute;
        bottom:0;
        left:0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
    /*股票型*/
    .typeBox{
        width:93.6%;
        height:1.8rem;
        background: #fff;
        border-radius:0.1rem;
        position: absolute;
        left:0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        bottom:-0.52rem;
        box-shadow:0.05rem 0 0.1rem 0 rgba(236,236,236,0.4);
    }
    .top{
        width: 87.2%;
        height: 0.9rem;
        border-bottom: 0.01rem solid #e7dbf3;
        margin:auto;
    }
    .zhu{
        width:0.06rem;
        height:0.43rem;
        background:#2b7afd;
        border-radius:0.6rem;
        margin-right:0.2rem;
        float: left;
        margin-top: 0.22rem;
    }
    .type{
        width: auto;
        height:0.56rem;
        float: left;
        margin: 0.18rem 0;
    }
    .chineseName{
        height: 0.28rem;
        font-size: 0.28rem;
        line-height: 0.28rem;
        color: #585858;
        font-weight:400;
        font-family: '苹方 粗体';
    }
    .enName{
        margin-top: 0.1rem;
        height: 0.18rem;
        font-size: 0.18rem;
        color: #d4d4d4;
        line-height: 0.18rem;
    }
    .risk{
        font-family: "苹方 粗体";
        color:#e4a12c;
        font-size: 0.26rem;
        float: right;
        margin-top:0.27rem;
    }
    .typeBox>.bottom{
        width: 87.2%;
        height:0.8rem;
        margin:auto;
        display: flex;
    }
    .bottom>.left{
        width: 50%;
        height: 100%;
        position: relative;
    }
    .newVal{
        width: 1.2rem;
        height:0.2rem;
        float: left;
        margin-top:0.4rem;
    }
    .newVal>.circle{
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background:#80aafe;
        float: left;
        margin-right: 0.12rem;
        margin-top:0.12rem;
    }
    .newVal>.new{
        font-size: 0.2rem;
        color:#8d8d8d;
        font-family: "苹方 粗体";
        float: left;
    }
    .val{
        position: absolute;
        font-size: 0.45rem;
        color: #585858;
        left:1.2rem;
        top:0.24rem;
    }
    .precent{
        height: 0.58rem;
        position: absolute;
        left:1.1rem;
        top:0.24rem;
        display: flex;
    }
    .precent>div{
        float: left;
    }
    .precent>div:nth-child(1){
        font-size:0.45rem;
        color: #36df72;
        margin-left: 0.2rem;
    }
    .precent>div:nth-child(2){
        font-size:0.45rem;
        color: #c0f3ce;
    }
    /*收益率*/
    .black{
        background: #f5f5f5;
        width: 100%;
        height: 4rem;
    }
    .profitBox{
        width: 100%;
        height: 5.2rem;
    }
    .top1{
        border-bottom: none;
    }
    .middle{
        width:78.4%;
        height:0.6rem;
        background: #fff;
        border-radius:0.6rem;
        margin: auto;
        display: flex;
        justify-content: space-around;
        margin-bottom: 0.14rem;
    }
    .middle>.time:first-child{
        background:#55a6ff;
    }
    .time{
        width: 1rem;
        height: 0.46rem;
        margin-top: 0.08rem;
        background:#c5dfff;
        border-radius:0.6rem;
        font-size: 0.14rem;
        color: #fff;
        letter-spacing:3px;
        text-align: center;
        line-height: 0.46rem;
    }
    .trend{
        width: 87.2%;
        height:3.4rem;
        margin: auto;
    }
    .bottom1{
        width:100%;
        height:2.62rem;
        background: #fff;
        border-radius: 10px;
        box-shadow:0 0 15px 2px rgba(216,216,216,0.5);
    }
    .bottom1>img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .bottom2{
        padding:0.09rem 0.3rem;
        display: flex;
        justify-content: space-between;
    }
    .bottom2>span{
        font-size:0.2rem;
        color: #c2c2c2;
        font-weight: 800;
        font-family: sans-serif;
    }
    .bottom2>span:nth-child(2){
        color:#868686;
        font-family: "苹方 粗体";
    }
    /*产品详情*/
    .projectBox{
        width: 100%;
        height:5rem;
    }
    .top2{
        border-bottom: none;
    }
    .middle>.proType:first-child{
        background:#55a6ff;
    }
    .proType{
        width: 1.5rem;
        height: 0.46rem;
        margin-top: 0.08rem;
        background:#c5dfff;
        border-radius:0.5rem;
        font-size: 0.14rem;
        color: #fff;
        letter-spacing:3px;
        text-align: center;
        line-height: 0.46rem;
    }
    .bottom3{
        width: 87.2%;
        height:2.96rem;
        margin: auto;
        background: #fff;
        border-radius: 10px;
        box-shadow:0 0 15px 2px rgba(216,216,216,0.5);
    }
    .row{
        width: 93%;
        height: 25%;
        margin:auto;
        border-bottom:1px dashed #eee ;
    }
    .bottom3>.row:last-child{
        border-bottom: none;
    }
    .rowType{
        float: left;
        font-size: 0.24rem;
        color:#b8b8b8;
        font-weight: 600;
        font-family:sans-serif;
        line-height:0.74rem;
        margin-right: 0.36rem;
    }
    .rowType1{
        color:#8d8d8d;
        font-family: "苹方 粗体";
    }
    /*底部*/
    .footer{
        width: 100%;
        height:1rem;
        background:#ffff;
        display: flex;
        justify-content: space-around;
    }
    .footer>.try:nth-child(2){
        background:#2cbfe4;
    }
    .try{
        width: 44%;
        height:0.56rem;
        border-radius:0.6rem;
        background: #2ce48b;
        font-size: 0.26rem;
        color: #fff;
        letter-spacing:3px;
        text-align: center;
        line-height: 0.56rem;
        box-shadow:0 0 15px 0 rgba(205,205,205,0.7);
        margin-top:0.24rem;
    }
</style>