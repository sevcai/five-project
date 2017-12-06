<template>
    <div>
        <div class="head">
            <div class="anniu" @click="click($event)" v-for="item in data">{{item.title}}</div>
        </div>
        <div class="black"></div>
        <div class="fenlei">
            <div class="biaoji"></div>
            <div class="biaoti">
                <div class="bshang">基金理财</div>
                <div class="bxia">DOUNDATION FINANCE</div>
            </div>
        </div>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">35.33</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">易方达安心回报</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">机遇猎手 顶级收益</div>
                </div>
            </div>
            <div class="xiang2">即将售罄</div>
            <div class="xiang3">
                <img src="../assets/img/per1.png" alt="">
            </div>
        </div></router-link>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">21.47</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">主题投资专家</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">提前预判 重点布局</div>
                </div>
            </div>
            <!--<div class="xiang2">即将售罄</div>-->
            <div class="xiang3">
                <img src="../assets/img/per2.png" alt="">
            </div>
        </div></router-link>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">26.27</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">指数当增强</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">指数增强获得超额利益</div>
                </div>
            </div>
            <div class="xiang2">即将售罄</div>
            <div class="xiang3">
                <img src="../assets/img/per3.png" alt="">
            </div>
        </div></router-link>

        <div class="fenlei">
            <div class="biaoji"></div>
            <div class="biaoti">
                <div class="bshang">活期理财</div>
                <div class="bxia">HUOQILICAIJINGXUAN</div>
            </div>
        </div>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">4.127</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">低风险 收益稳</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">活期理财新选择</div>
                </div>
            </div>
            <div class="xiang2">即将售罄</div>

        </div></router-link>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">16.66</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">低风险</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">提前预判 重点布局</div>
                </div>
            </div>
            <div class="xiang2">新手专享</div>
            <!--<div class="xiang3">-->
            <!--<img src="img/2.png" alt="">-->
            <!--</div>-->
        </div></router-link>


        <div class="fenlei">
            <div class="biaoji"></div>
            <div class="biaoti">
                <div class="bshang">定期理财</div>
                <div class="bxia">DOUNDATION FINANCE</div>
            </div>
        </div>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">4.403</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">短期7天</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">1元起投</div>
                </div>
            </div>
            <div class="xiang2">新手专享</div>
            <!--<div class="xiang3">-->
            <!--<img src="img/1.png" alt="">-->
            <!--</div>-->
        </div></router-link>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">4.523</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">短期14天</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">提前预判 重点布局</div>
                </div>
            </div>
            <!--<div class="xiang2">即将售罄</div>-->
            <!--<div class="xiang3">-->
            <!--<img src="img/2.png" alt="">-->
            <!--</div>-->
        </div></router-link>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">4.614</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">短期30天</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">机遇猎手 顶级收益</div>
                </div>
            </div>
            <!--<div class="xiang2">即将售罄</div>-->
            <!--<div class="xiang3">-->
            <!--<img src="img/1.png" alt="">-->
            <!--</div>-->
        </div></router-link>
        <router-link to="/detail"><div class="xiangqing">
            <div class="xiang1">
                <div class="xshang">
                    <div class="baifen">5.536</div>
                    <div class="hao">%</div>
                    <div class="chanpinming">长期360天</div>
                </div>
                <div class="xxia">
                    <div class="jinqi">近期利率</div>
                    <div class="jiyu">提前预判 重点布局</div>
                </div>
            </div>
            <!--<div class="xiang2">即将售罄</div>-->
            <!--<div class="xiang3">-->
            <!--<img src="img/2.png" alt="">-->
            <!--</div>-->
        </div></router-link>
        <div class="bu"></div>
    </div>
</template>
<script>
    export default {
        name: 'list',
        data() {
            return {
                data:[
                    {title:'基金理财'},
                    {title:'活期理财'},
                    {title:'定期理财'}
                ]
            }
        },
        methods:{
            click(event){
                let anniuone=event.currentTarget
                let anniu=document.querySelectorAll('.anniu');
                    for(let j=0;j<anniu.length;j++){
                        anniu[j].style.background='#4380fb';
                        anniu[j].style.color='#b2c6fd';
                    }
                anniuone.style.background='#fff';
                anniuone.style.color='#2c69e4';
            }
        }
    }
</script>
<style scoped>
    .head{
        height: 1.54rem;
        width: 100%;
        background: #2c69e4;
        position: fixed;
        top: 0;
        left: 0;
    }
    .anniu{
        width: 29.7%;
        height: 0.66rem;
        margin-left: 3%;
        background: #4380fb;
        float: left;
        margin-top: 0.66rem;
        border-radius: .33rem;
        text-align: center;
        line-height: .66rem;
        color: #b2c6fd;
        font-family: "苹方";
        font-size: .34rem;
        font-weight: bold;
    }
    .anniu:first-child{
        background: #fff;
        color: #2c69e4;
    }
    .black{
        width: 100%;
        height: 1.54rem;
    }
    .fenlei{
        width: 50%;
        height: .69rem;
        margin-top: 3.2%;
        margin-left: .24rem;
    }
    .biaoji{
        width: 0.06rem;
        height: .44rem;
        border-radius: .06rem;
        margin-top: 0.1rem;
        background: #2c69e4;
        float: left;
    }
    .biaoti{
        float: left;
        margin-left: 3.2%;
    }
    .bshang{
        color: #545454;
        font-family: "苹方";
        font-size: .28rem;
    }
    .bxia{
        color: #d4d4d4;
        font-family: "苹方";
        font-size: .16rem;
    }
    .xiangqing{
        width: 93%;
        height: 1.4rem;
        box-shadow: 0 0 10px 0 #e8e8e8;
        margin: .24rem auto;
        overflow: hidden;
    }
    .xiang1{
        width: 60%;
        height:1rem;
        margin-left:3.2%;
        margin-top: .14rem;
        float: left;
    }
    .xshang{
        width: 100%;
        height: .6rem;
        /*display: flex;*/
        /*justify-content: space-around;*/
    }
    .baifen{
        font-size: .45rem;
        color: #fd7a2b;
        float: left;
    }
    .hao{
        font-size: .3rem;
        color: #ffe7d4;
        margin-top: .2rem;
        float: left;
    }
    .chanpinming{
        float: left;
        color: #7e7e7e;
        font-family: "苹方";
        font-size: .3rem;
        font-weight: bold;
        margin-top: .1rem;
        margin-left: 3.2%;
    }
    .xxia{
        width: 100%;
        height:.4rem;
        margin-top: .1rem;
        /*display: flex;*/
        /*justify-content: space-around;*/
    }
    .jinqi{
        margin-left: 3%;
        margin-top: .03rem;
        color: #b8b8b8;
        font-family: "苹方";
        font-size: .2rem;
        float: left;
    }
    .jiyu{
        color: #b8b8b8;
        font-family: "苹方";
        font-size: .26rem;
        float: left;
        margin-left: 5%;
    }
    .xiang2{
        float: left;
        width: 1.12rem;
        height: .29rem;
        margin-top: .24rem;
        margin-left: 0;
        background: #2ce457;
        text-align: center;
        line-height: .29rem;
        color: #fff;
        font-family: "苹方";
        font-size: .16rem;
        border-radius: .13rem;
    }
    .xiang3{
        float: right;
        width: .89rem;
        height:.89rem;
        margin-top: .24rem;
        margin-right: 3.2%;
    }
    .xiang3>img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .bu{
        height: 1rem;
    }
</style>