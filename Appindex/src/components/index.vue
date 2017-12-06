<template>
  <div style="width: 100%;">
    <header>
      <div class="banner">
        <img src="../assets/img/banner.png" alt="">
      </div>
    </header>
    <section>
      <div class="nav">
        <a href="javascript:;" class="qiandao">
          <div class="picture"><img src="../assets/img/qiandao.png" alt=""></div>
          <div class="wenzi">
            <div class="top">每日签到</div>
            <div class="bottom">今天签过啦 明天再来</div>
          </div>
        </a>
        <a href="javascript:;" class="qiandao">
          <div class="picture"><img src="../assets/img/haoyou.png" alt=""></div>
          <div class="wenzi">
            <div class="top">新增好友</div>
            <div class="bottom">和好友一起领现金红包</div>
          </div>
        </a>
        <div class="fenge"></div>
      </div>
    </section>
    <section>
      <div class="nav nav2">
        <div class="circle"></div>
        <div class="tuijian">
          <div class="chinese">产品推荐</div>
          <div class="eng">CHANPINTUIJIAN</div>
        </div>
        <div class="box">
          <div class="bian"></div>
          <a href="javascript:;" class="con">
            <div class="dian"></div>
            <div class="info">
              <div class="title">
                <span>定期</span>
                <span class="day">天</span>
                <div class="thirty">30</div>
              </div>
              <div class="num">
                <span>5.62</span>
                <span class="per">%</span>
              </div>
              <div class="year">七日年化利率</div>
            </div>
          </a>
          <a href="javascript:;" class="con">
            <div class="dian"></div>
            <div class="info">
              <div class="title">
                <span>活期</span>
                <span class="day">SF</span>
              </div>
              <div class="num">
                <span>6.3</span>
                <span class="per">%</span>
              </div>
              <div class="year">七日年化利率</div>
            </div>
          </a>
          <a href="javascript:;" class="con">
            <div class="dian" style="top: 0.33rem;"></div>
            <div class="info" style="margin-top: 0.28rem;">
              <div class="title">
                <span>债券基金</span>
              </div>
              <div class="num">
                <span>0.45</span>
                <span class="per">%</span>
              </div>
              <div class="year">最低收益利率</div>
            </div>
          </a>
          <a href="javascript:;" class="con">
            <div class="dian" style="top: 0.33rem;"></div>
            <div class="info" style="margin-top: 0.28rem;">
              <div class="title">
                <span>海外投资</span>
              </div>
              <div class="num">
                <span>2.48</span>
                <span class="per">%</span>
              </div>
              <div class="year">这里有高额回报</div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section>
      <div class="nav3">
        <div class="circle" style="margin-left: 0.48rem"></div>
        <div class="tuijian">
          <div class="chinese">新手福利</div>
          <div class="eng">NEW USER WILL GET</div>
        </div>
        <div class="img-box">
          <a href="javascript:;" class="img"><img src="../assets/img/fuli1.png" alt=""></a>
          <a href="javascript:;" class="img"><img src="../assets/img/fuli2.png" alt=""></a>
        </div>
      </div>
    </section>
    <section>
      <div class="nav nav4">
        <div class="circle"></div>
        <div class="tuijian">
          <div class="chinese">阶段数据汇总</div>
          <div class="eng">JIEDUANSHUJUHUIZONG</div>
        </div>
        <div class="item">
          <a href="javascript:;" class="today" @click="click($event)" v-for="item in data">{{item.title}}</a>
        </div>
        <div class="shouyi">
          <div class="total">
            <div class="name">总收益</div>
            <div class="money">120
              <div class="yuan">W</div>
            </div>
          </div>
          <div class="total">
            <div class="name">总日活</div>
            <div class="money" style="color: #eda637">320
              <div class="yuan" style="background: #f4ca87">W</div>
            </div>
          </div>
          <div class="total" style="margin-right: 0;">
            <div class="name">总交易</div>
            <div class="money" style="color: #2b8aff">990
              <div class="yuan" style="background: #80b9ff">W</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      data:[
          {title:"今日"},
          {title:"MONTH"},
          {title:"YEAR"},
      ]
    }
  },
    methods:{
      click(event){
          let todayone=event.currentTarget
          var today=document.querySelectorAll('.today');
              for(let j=0;j<today.length;j++){
                  today[j].style.background='#c5dfff';
                  today[j].style.color='#e9f3ff';
              }
          todayone.style.background='#53a5fd';
          todayone.style.color='white';
      }
    }
}
</script>

<style scoped>
  /*banner图*/
  .banner{
    width: 100%;
    height: 4.35rem;
    background: red;
    margin-bottom: 0.28rem;
  }
  .banner img{
    display: block;
    width: 100%;
    height: 100%;
  }
  /*第一部分*/
  section{
    width: 100%;
    height: auto;
  }
  .nav{
    width: 93.6%;
    height: 1.45rem;
    margin: auto;
    background: white;
    margin-bottom: 0.24rem;
    box-shadow: 0 0 10px 0 #e8e8e8;
    border-radius: 0.1rem;
    overflow: hidden;
    position: relative;
  }
  .qiandao{
    width: 50%;
    height: 100%;
    float: left;
  }
  .picture{
    width: 1.04rem;
    height: 1.04rem;
    border-radius: 50%;
    margin-left: 0.21rem;
    margin-top: 0.21rem;
    float: left;
  }
  .picture img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .wenzi{
    width: 2.04rem;
    height: 0.54rem;
    margin-top: 0.45rem;
    margin-left: 0.20rem;
    float: left;
  }
  .top{
    width: 100%;
    height: 0.26rem;
    margin-bottom: 0.1rem;
    line-height: 0.26rem;
    font-size: 0.26rem;
    color: #64a0fc;
  }
  .bottom{
    width: 100%;
    height: 0.18rem;
    line-height: 0.18rem;
    font-size: 0.18rem;
    color: #c0d7fd;
  }
  .fenge{
    width: 0.02rem;
    height: 1.22rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: #f4f4f4;
  }
  .nav2{
    height: 4.27rem;
  }
  .nav4{
    height: 2.68rem;
    margin-bottom: 1.24rem;
  }
  .nav3{
    width: 100%;
    height: 2.77rem;
    background: white;
    margin-bottom: 0.24rem;
    box-shadow: 0 0 10px 0 #e8e8e8;
    overflow: hidden;
  }
  /*第二部分*/
  .circle{
    width: 0.06rem;
    height: 0.43rem;
    background: #2b7afd;
    border-radius: 0.06rem;
    margin-left: 0.24rem;
    margin-top: 0.28rem;
    float: left;
  }
  .tuijian{
    width: auto;
    height:0.56rem;
    float: left;
    margin-left: 0.14rem;
    margin-top: 0.24rem;
  }
  .chinese{
    height: 0.28rem;
    font-size: 0.28rem;
    line-height: 0.28rem;
    color: #585858;
    font-weight: bold;
    font-family: '苹方 粗体';
  }
  .eng{
    margin-top: 0.1rem;
    height: 0.18rem;
    font-size: 0.18rem;
    color: #e6e6e6;
    line-height: 0.18rem;
  }
  .box{
    width: 100%;
    height: 3.23rem;
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
  }
  .bian{
    width: 0.02rem;
    height: 80%;
    background: #f4f4f4;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
  }
  .con{
    display: block;
    width: 50%;
    height: 50%;
    position: relative;
  }
  .con:nth-child(2){
    border-bottom: 0.02rem solid #f4f4f4;
  }
  .con:nth-child(3){
    border-bottom: 0.02rem solid #f4f4f4;
  }
  .dian{
    position: absolute;
    top: 0.25rem;
    left: 0.6rem;
    width: 0.12rem;
    height: 0.12rem;
    border-radius: 50%;
    background: #2cdf2b;
    border: 0.03rem solid #b7f1b6;
  }
  .info{
    width: 70%;
    height: 1.14rem;
    margin-top: 0.20rem;
    margin-left: 0.85rem;
  }
  .title{
    width: 100%;
    height: 0.26rem;
    font-size: 0.26rem;
    margin-bottom: 0.02rem;
    line-height: 0.26rem;
    position: relative;
  }
  .title span{
    height: 100%;
    color: #a3a3a3;
    margin-right: 0.15rem;
  }
  .title .day{
    height: 100%;
    color: #dcdcdc;
  }
  .thirty{
    position: absolute;
    left: 1.1rem;
    top: 0;
    width: 0.42rem;
    height: 100%;
    font-size: 0.14rem;
    line-height: 0.26rem;
    text-align: center;
    color: white;
    background: #5fdb2e;
    border-radius: 0.13rem;
  }
  .num{
    width: 100%;
    height: 0.6rem;
    font-size: 0.6rem;
    margin-bottom: 0.02rem;
    line-height: 0.6rem;
  }
  .num span{
    height: 100%;
    color: #2b7afd;
  }
  .num .per{
    height: 100%;
    color: #2b7afd;
    text-align: center;
  }
  .year{
    width: 100%;
    height: 0.24rem;
    font-size: 0.24rem;
    line-height: 0.24rem;
    color: #cacaca;
  }
  /*新手福利图片*/
  .img-box{
    width: 100%;
    height: 1.5rem;
    margin-top: 1.04rem;
  }
  .img{
    display: block;
    width: 45.6%;
    height: 1.44rem;
    background: red;
    float: left;
    margin-left: 0.24rem;
  }
  .img img{
    display: block;
    width: 100%;
    height: 100%;
  }
  /*第四部分*/
  .item{
    width:93.3%;
    height: 0.6rem;
    margin: 0 auto;
    margin-top: 1.04rem;
    background: #f3f3f3;
    border-radius: 0.6rem;
    display: flex;
    justify-content: space-around;
  }
  .today{
    display: block;
    width: 32%;
    height: 0.5rem;
    background:#c5dfff;
    color: #e9f3ff;
    font-size: 0.3rem;
    margin-top: 0.05rem;
    border-radius: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
  }
  .today:first-child{
    background: #53a5fd;
    color: white;
  }
  .shouyi{
    width:93.3%;
    height: 0.7rem;
    margin: 0 auto;
    margin-top: 0.22rem;
    display: flex;
    justify-content: space-between;
  }
  .total{
    width: 1.23rem;
    margin-right: 1.43rem;
    height: 100%;
  }
  .name{
    width: 100%;
    height: 0.2rem;
    color: #dddddd;
    font-size: 0.24rem;
    margin-bottom: 0.12rem;
  }
  .money{
     width: 100%;
     height: 0.38rem;
     color: #1fca80;
    font-size: 0.34rem;
    line-height: 0.38rem;
    position: relative;
   }
  .yuan{
    width: 0.34rem;
    height: 100%;
    position: absolute;
    left: 0.68rem;
    top: 0;
    border-radius: 50%;
    background: #79dfb3;
    font-size: 0.12rem;
    line-height: 0.38rem;
    text-align: center;
  }
</style>
