<template>
    <div class="money">
        <div class="head">
            <Header></Header>
            <!--<Goback></Goback>-->
        </div>
        <div class="null">
            <img src="../assets/img/null.png" alt="">
        </div>
        <div class="touzi">
            您还没有投资 记录是空的
        </div>
        <div class="touzieng">
            QULICAI BIANFUWENG
        </div>
        <router-link to="/list"><div class="go">
            去投资
        </div></router-link>
    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
    components: {Header }
}
</script>
<style scoped>
    .head{
        width: 100%;
        height: 1.92rem;
        background: #2c69e4;
        position: relative;
    }
    .null{
        width: 3.68rem;
        height: 3.35rem;
        margin-top: 2.18rem;
        margin-left: 1.6rem;
    }
    .null>img{
        width: 100%;
        height: 100%;
    }
    .touzi{
        width: 100%;
        height: 0.34rem;
        margin-top: 0.62rem;
        line-height: 0.34rem;
        font-size: 0.34rem;
        text-align: center;
        font-family: "苹方 粗体";
        letter-spacing: 0.04rem;
        color: #b0b0b0;
    }
    .touzieng{
        width: 100%;
        height: 0.26rem;
        text-align: center;
        line-height: 0.26rem;
        margin-top: 0.18rem;
        font-size: 0.26rem;
        letter-spacing: 0.02rem;
        font-family: "San Francisco Display";
        color: #e5e5e5;
    }
    .go{
        margin-top: 1.36rem;
        width: 2.4rem;
        height: 0.66rem;
        border-radius: 0.5rem;
        position: absolute;
        left: 2.55rem;
        bottom: 3.62rem;
        background-image:-webkit-linear-gradient( left,#3874eb,#2cc2ed);
        font-size: 0.34rem;
        color: #fff;
        line-height: 0.66rem;
        text-align: center;
        letter-spacing: 0.05rem;
        font-weight: bold;
    }
</style>
