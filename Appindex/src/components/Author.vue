<template>
    <div class="Author">
        <div class="head">
            <img src="../assets/img/140104110P8-16.jpg" alt="">
        </div>
        <div class="info">
            <span>Jim.Green</span>
            <p>首都财经杂志主编 东芝消息报道首稿撰写者</p>
            <div class="attention">
                <div class="icon"></div>
                <span>关注</span>
            </div>
            <div class="foot">
                <div class="circle"></div>
                <span>2017-11-17</span>
                <div class="circle"></div>
                <span>阅读  13</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Author'
    }
</script>

<style scoped>
    .Author{
        width: 100%;
        height: 1.41rem;
        background: white;
        border-radius: 0.1rem;
        padding: 0.24rem;
        box-sizing: border-box;
        box-shadow: 0 0.02rem 0.1rem 0.02rem rgba(0,0,0,0.1);
    }
    .head{
        width: 0.57rem;
        height: 0.57rem;
        background: #f5f1f2;
        border-radius: 50%;
        float: left;
        overflow: hidden;
        font-size: 0;
    }
    .head>img{
        height: 100%;
    }
    .info{
        height: 0.64rem;
        margin-left: 0.81rem;
        position: relative;
        box-sizing: border-box;
        border-bottom: 0.02rem dotted #dddddd;
        font-size: 0;
        line-height: 0.28rem;
    }
    .info>span{
        display: block;
        font-size: 0.25rem;
        color: #6a96e7;
    }
    .info>p{
        font-size: 0.18rem;
        color: #b8b8b8;
    }
    .attention{
        width: 1.09rem;
        height: 0.47rem;
        border-radius: 1rem;
        background-image: -webkit-linear-gradient(top,#2dd2e1,#2baadf);
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
    }
    .icon{
        width: 0.29rem;
        height: 0.29rem;
        border-radius: 50%;
        margin-left: 0.09rem;
        background: url("../assets/img/star.png") no-repeat center #35a3dd;
        background-size: 0.15rem 0.15rem;
    }
    .icon+span{
        font-size: 0.2rem;
        color: #ffffff;
        font-weight: 600;
        margin: -0.02rem 0 0 0.09rem;
    }
    .foot{
        margin-top: 0.18rem;
        display: flex;
        align-items: center;
    }
    .circle{
        display: inline-block;
        width: 0.08rem;
        height: 0.08rem;
        background: #2c69e4;
        border: 0.02rem solid #b8d0ff;
        border-radius: 50%;
        margin-right: 0.07rem;
    }
    .foot>span{
        font-size: 0.18rem;
        color: #b8b8b8;
        margin-right: 0.36rem;
    }
</style>