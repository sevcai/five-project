<template>
    <div class="shares">
        <MyCenter></MyCenter>
        <div class="zhezhao">
            <img class="shareli" src="../assets/img/sa_03.png">
            <div class="jiantou"><img src="../assets/img/jian.png" alt=""></div>
            <div class="setting">
                设置按钮搬家啦<br>
                账号 基本信息设置在这里
            </div>
            <router-link to="MyCenter"><div class="scan">已阅</div></router-link>
        </div>
    </div>
</template>
<script>
    import MyCenter from "@/components/MyCenter";
export default {
    components: { MyCenter }
}
</script>
<style scoped>
    .center,footer{
        filter: blur(3px);
    }
    .shares{
        width: 100%;
        height: 100%;
    }
    .zhezhao{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        background: rgba(0,0,0,0.3);
        z-index: 999;
    }
    .shareli{
        width: 0.5rem;
        height: 0.5rem;
        position: absolute;
        top: 0.65rem;
        right: 1.24rem;
        border-radius: 50%;
    }
    .scan{
        display: block;
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
    .setting{
        width: 100%;
        height: 0.66rem;
        position: absolute;
        top: 4.52rem;
        left: 0;
        font-size: 0.3rem;
        text-align: center;
        line-height: 0.33rem;
        color: #fff;
        letter-spacing: 0.03rem;
    }
    .jiantou{
        width: 2.44rem;
        height: 3.6rem;
        position: absolute;
        top: 0.8rem;
        right: 2rem;
    }
    .jiantou img{
        width: 100%;
        height: 100%;
    }
</style>
