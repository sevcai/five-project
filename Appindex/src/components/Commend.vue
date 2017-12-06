<template>
  <div>
  <div class="Commend" :style="filter">
    <div class="head-bac">
      <main>
        <div class="header">
          <Back></Back>
          <div class="top"></div>
          <h3>东芝倒塌实录</h3>
          <div class="bottom"></div>
          <Share></Share>
        </div>
        <div class="line"></div>
        <Author></Author>
      </main>
    </div>
    <div class="img">
      <img src="../assets/img/bac.png" alt="">
    </div>
    <main>
      <p>海信集团旗下上市公司海信电器股份有限公司与东芝株式会社在东京联合宣布海信将收购东芝映像解决方案公司（Toshiba Visual Solutions Corporation）95%的股权</p>
      <p>本次股权转让金额暂计为129亿日元 交易完成后 海信电器将享有东芝电视产品品牌运营服务等  一揽子业务 并拥有东芝电视全球40年品牌授权 根据日本经济新闻报道 西屋的职员有着世界第一核电公司的自豪根本不听从日本来的技术员的话就连上层人员也一样 无视母公司的命令就像一个独立王国一样</p>
      <p>关于工程成本大幅超标的问题 四年前在东芝核电部门已不是秘密西屋的赤字问题已经是显而易见的了 但是东芝上层却没有介入治理这个问题 因为 西屋的行事就像一个半独立的王国，东京母公司根本就没法控制</p>
      <p>虽然普华永道最终在东芝财报的审批上签了字 但前者在为这份财报提供广泛担保的同时 发布了一份不同寻常的 保留意见书 和 否定意见书 称该公司在计入西屋电气亏损的时间过晚</p>
      <comArea :commend="commend"></comArea>
      <p @click="more()" class="p">点击查看更多评论 ...</p>
    </main>

    <div class="footer">
      <main>
        <!--<router-link to="/write" tag="div" class="liuyan">
            <img src="../assets/imgs/footer_28.png" alt="">
        </router-link>-->
        <div class="liuyan" @click="write()">
          <img src="../assets/img/footer_28.png" alt="">
        </div>
        <div class="liuyan">
          <img src="../assets/img/footer_30.png" alt="">
        </div>
        <div class="liuyan">
          <img src="../assets/img/footer_32.png" alt="">
        </div>
      </main>
    </div>
  </div>
    <div class="write" v-if="flag" style="-webkit-overflow-scrolling: touch;">
      <div class="Write">
        <div class="write-head">
          <main>
            <div @click="back()">
              <Back></Back>
            </div>
          </main>
        </div>
        <main>
          <div class="commend">
            <textarea name="" id="" cols="30" rows="10" placeholder="说点什么吧..." v-model="mcon" @keyup="word()"></textarea>
            <div class="send">
              <div class="words">
                <span>{{words}}</span>
                <span>. 200</span>
              </div>
              <div class="img1">
                <img src="../assets/img/write_03.png" alt="">
                <input type="file">
              </div>
              <div class="right" @touchstart="send()">
                发送
              </div>
              <div class="right">
                <img src="../assets/img/write_14.png" alt="">
              </div>
              <div class="right">
                <img src="../assets/img/write_12.png" alt="">
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
    import Back from './Back.vue'
    import Share from './Share1.vue'
    import Author from './Author.vue'
    import comArea from './comArea.vue'

    export default {
        name: 'Commend',
        components:{Back,Share,Author,comArea},
        data () {
          return {
            flag:false,
            filter:"filter:blur(0rem)",
            commend:[],
            mcon:"",
            words:"0",
            page:1
          }
        },
        methods:{
            write(){
                this.flag=!this.flag;
                this.filter="filter:blur(0.08rem)"
            },
            back(){
                this.flag=!this.flag;
                this.filter="filter:blur(0rem)"
            },
            word(){
                if (this.mcon.length<=200){
                    this.words=this.mcon.length;
                }else {
                    this.words=200;
                }
            },
            send(){
                var mcon=this.mcon;
                var uid=JSON.parse(sessionStorage.indexLogin).uid;
                console.log(uid)
                var conid=1;
                var that=this;
                if (mcon!=""){
                    fetch("/ajax/users/select",{
                        method:"post",
                        headers:{"content-type":"application/x-www-form-urlencoded"},
                        body:`uid=${uid}&conid=${conid}&mcon=${mcon}`
                    }).then(function (e) {
                        return e.json();
                    }).then(function (e) {
                        if (e){
                            that.flag=!that.flag;
                            that.filter="filter:blur(0rem)";
                            that.mcon="";
                            that.commend.unshift(e[0]);
                        }
                    })
                }
            },
            more(){
                var that=this;
                var conid=1;
                var page=this.page++;
                fetch(`/ajax/users/message?conid=${conid}&page=${page}`).then(function (e) {
                    return e.json();
                }).then(function (e) {
                    for(var i=0;i<e.length;i++){
                        that.commend.unshift(e[i])
                    }
                })
            }
        },
  created(){
      var that=this;
      var conid=1;
      var page=0;
      fetch(`/ajax/users/message?conid=${conid}&page=${page}`).then(function (e) {
        return e.json();
      }).then(function (e) {
          that.commend=e
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Commend{
    width: 100%;
    height: auto;
    background: #f5f5f5;
    position: absolute;
    left: 0;
    top:0;
  }
  .head-bac{
    width: 100%;
    height: 2.54rem;
    background: #2c69e4;
  }
  main{
    width: 7.02rem;
    height: auto;
    margin: 0 auto;
  }
  .header{
    padding-top: 0.74rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
    position: relative;
  }
  .header>h3{
    font-size: 0.3rem;
    font-weight: bold;
    letter-spacing: 0.06rem;
    color: #f1f1f1;
  }
  .top{
    width: 0.2rem;
    height: 0.01rem;
    background: #4b86fe;
    position: absolute;
    top:0.75rem;
    left: 50%;
    transform: translateX(-50%);
    border-left: 0.02rem solid #ffffff;
    border-right: 0.02rem solid #ffffff;
  }
  .bottom{
    width: 0.2rem;
    height: 0.01rem;
    background: #4b86fe;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    border-left: 0.02rem solid #ffffff;
    border-right: 0.02rem solid #ffffff;
  }
  .line{
    width: 100%;
    height: 0.01rem;
    background: #509cff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.26rem;
  }
  .line::before,.line::after{
    display: block;
    content: "";
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: white;
  }

  .img{
    width: 100%;
    height: 3.16rem;
    background: pink;
    margin-top: 1.24rem;
    overflow: hidden;
  }
  .img>img{
    width: 100%;
  }
  p{
    font-size: 0.23rem;
    color: #6f6f6f;
    text-align: left;
    margin-top: 0.46rem;
    line-height: 0.45rem;
  }
  .write{
    width: 100%;
    height: auto;
    position: fixed;
    left: 0;
    top: 0;
  }

  .footer{
    width: 100%;
    height: 1rem;
    background: #2b8aff;
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
  }
  main{
    width: 7.02rem;
    height: auto;
    margin: 0 auto;
  }
  .liuyan{
    width: 0.65rem;
    height: 0.65rem;
    background: #ffffff;
    border: 0.01rem solid #a5bdee;
    float: left;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .liuyan>img{
    width: 99%;
    border-radius: 50%;
  }
  .liuyan:nth-of-type(2){
    margin-left: 0.27rem;
  }
  .liuyan:nth-of-type(3){
    float: right;
  }

  .filter{
    filter:blur(0.08rem)
  }

  .Write{
    /*position: absolute;
    top:0;
    left: 0;*/
    z-index: 666;
  }
  .write-head{
    width: 100%;
    height: 1rem;
    background: #2c69e3;
    display: flex;
    align-items: center;
    margin-bottom: 1.77rem;
  }
  main{
    width: 7.02rem;
    height: auto;
    margin: 0 auto;
  }
  .commend{
    width: 100%;
    height: auto;
    border-radius: 0.1rem;
    box-shadow: 0 0.02rem 0.1rem 0.02rem rgba(0,0,0,0.1);
    overflow: hidden;
    font-size: 0;
  }
  textarea{
    width: 100%;
    height: 4.38rem;
    background: white;
    outline: none;
    padding: 0.2rem;
    margin: 0;
    box-sizing: border-box;
    border: none;
    display: block;
  }
  .send{
    width: 100%;
    height: 0.89rem;
    background: #e9f0fc;
    margin-top: -0.1rem;
    position: relative;
  }
  .img1{
    width: 1.38rem;
    height: 1.38rem;
    position: absolute;
    left: 0.24rem;
    bottom: 0.2rem;
    border-radius: 0.05rem;
    overflow: hidden;
  }
  .img1>img{
    width: 100%;
  }
  input[type="file"]{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 2;
  }
  .right{
    width: 0.58rem;
    height: 0.58rem;
    background: white;
    border-radius: 50%;
    margin-right: 0.28rem;
    float: right;
    margin-top: 0.17rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00B7FF;
    font-size: 0.24rem;
  }
  .right>img{
    width: 100%;
    border-radius: 50%;
  }
  .words{
    position: absolute;
    right: 0.24rem;
    top: -0.42rem;
    font-size: 0.24rem;
    color: #cccccc;
    font-weight: bold;
  }
  .words>span:nth-of-type(1){
    color: #00B7FF;
  }

  .p{
    font-size: 0.18rem;
    color: #92aaeb;
    text-align: left;
    margin-top: 0.18rem;
    line-height: 0.1rem;
  }
</style>
