<template>
  <div class="index">

      <div class="header">
          <router-link to="" class="add" tag="div" >
              <img src="../assets/img/tianjia.png" alt="" @click="show">
          </router-link>
<!--选项卡组件-->
          <tag class="tag"></tag>
      </div>

          <bodys></bodys>

      <div class="Write" v-show="Conboxs">
          <div class="write-head">
              <main>
                  <div class="back">
                      <img src="../assets/img/back_03.png" alt="" @click="show">
                  </div>
                  <div class="save">
                      <img src="../assets/img/save_05.png" alt="" @click="save">
                  </div>
              </main>
          </div>
          <main>
              <div class="titlebox">
                  <input type="text" class="title" placeholder="此处填写标题" v-model="title">
              </div>
              <div class="commend">
                  <textarea name="" id="" cols="30" rows="10" placeholder="填写您要发布的内容" maxlength="200" v-model="con" @keyup="num"></textarea>
                  <div class="fontnum">
                      <span>{{fontnum}}</span>
                      <span>.200</span>
                  </div>
                  <div class="send">
                      <div class="img">
                          <img src="../assets/img/111_03.png" alt="">
                          <input type="file">
                      </div>
                      <div class="right">
                          <img src="../assets/img/111_06.png" alt="">
                      </div>
                      <div class="right" @click="clear">
                          <img src="../assets/img/sanchu_08.png" alt="">
                      </div>
                  </div>
              </div>
          </main>
      </div>



  </div>
</template>

<script>
import tag from '@/components/tag'
import bodys from '@/components/body'

export default {
  components:{tag,bodys},
  data () {
    return {
        Conboxs:false,
        title:'',
        con:'',
        fontnum:'0'
    }
  },
  methods:{

      show(){
        this.Conboxs=!this.Conboxs;
      },
      save(){
          let id=sessionStorage.indexLogin.id;
          fetch('/ajax/con/addcon',{
              method:'post',
              headers:{
                  "content-type":'application/x-www-form-urlencoded'
              },
              body:"title="+this.title+"&con="+this.con+"&id="+id
          }).then(function (e) {
              return e.json()
          }).then(function (e) {
              console.log(e)
          })
      },
      num(){
          if(this.con.length<=200){
              this.fontnum=this.con.length
          }
      },
      clear(){
          this.con=''
      }

  }
}
</script>


<style scoped>

.index{
    position: relative;
}
.Write{
    position: absolute;
    top:0;
    left:0;
}
.header{
    position: fixed;
    top: 0;
    left: 0;
  width: 100%;
  height: 2.22rem;
  background: #2c69e4;
  overflow: hidden;
}
  .add{
    width: 0.68rem;
    height:0.68rem;
    border-radius: 50%;
    float: right;
    margin-top: 0.52rem;
    margin-right: 0.24rem;
    background: #285fce;
  }
.add>img{
    display: block;
    width: 0.68rem;
    height: 0.68rem;
}
.tag{
    float: right;
    margin-top: 0.12rem;
    margin-right:0.23rem;
}
.cjbox{
    width: 100%;
    height: auto;
    background: red;

}





html,body{
    width: 100%;
    height: 100%;
}
.Write{
    /*position: absolute;
    top:0;
    left: 0;*/
    width: 100%;

    height: 13.34rem;
    overflow: hidden;
    background: rgba(227,227,227,0.9);
    z-index: 8;
}
.write-head{
    width: 100%;
    height: 1rem;
    background: #2c69e3;
    display: flex;
    align-items: center;

}
main{
    width: 7.02rem;
    height: auto;
    margin: 0 auto;
}
.back{
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 50%;
    /*background: yellow;*/
    float: left;
}
.back>img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.save{
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 50%;
    /*background: yellow;*/
    float: right;
}
.save>img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.titlebox{
    width: 100%;
    height: 1.10rem;
    /*background: yellow;*/
    box-shadow: 0 0.02rem 0.1rem 0.02rem rgba(0,0,0,0.1);
    margin-top: 0.24rem;
    margin-bottom: 0.24rem;
}
.title{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 1.10rem;
    font-size: 0.29rem;
    font-weight: bold;
    outline: none;
    border: none;
    padding: 0 0.23rem;
    box-sizing: border-box;
    color: #b8b8b8;
    font-family: "苹方 常规";
}
.commend{
    width: 100%;
    height: auto;
    border-radius: 0.1rem;
    box-shadow: 0 0.02rem 0.1rem 0.02rem rgba(0,0,0,0.1);
    overflow: hidden;
    font-size: 0;
    position:relative;
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
    resize: none;
    font-size: 0.23rem;
    font-weight: bold;
    color: #b8b8b8;
}
.send{
    width: 100%;
    height: 0.89rem;
    background: #ffffff;
    margin-top: -0.1rem;
    position: relative;
}
.fontnum{
    width: auto;
    height: 0.15rem;
    /*background:pink;*/
    position: absolute;
    right:0.24rem;
    bottom:1.08rem;
    color: #000;
}
.fontnum>span{
    display: block;
    width: auto;
    height: 100%;
    font-size: 0.15rem;
    line-height: 0.15rem;
    float: left;
}
.fontnum>span:first-child{
    color: #6c9dff;
}
.fontnum>span:last-child{
    color: #cccccc;
}

.img{
    width: 1.38rem;
    height: 1.38rem;
    position: absolute;
    left: 0.24rem;
    bottom: 0.2rem;
    border-radius: 0.05rem;
    overflow: hidden;
}
.img>img{
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
    box-shadow: 0 0.03rem 0.1rem 0.03rem #f6f6f6;
}
.right>img{
    width: 100%;
    border-radius: 50%;
}
</style>
