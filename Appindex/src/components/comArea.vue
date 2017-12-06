<template>
    <div class="comArea">
        <div class="head">
            <span></span>
            <p>热门评论</p>
            <p>AWESOME COMMENT</p>
        </div>
        <ul>
            <li v-for="(item,key) in this.commend" :key="key">
                <div class="user-head">
                    <img src="../assets/img/140104110P8-16.jpg" alt="">
                </div>
                <div class="right">
                    <span>{{item.uname}}</span>
                    <span>{{item.mcon}}</span>
                    <div class="replay">
                        <div class="date">
                            <div class="circle"></div>
                            <span>{{item.mdate}}</span>
                        </div>
                        <div class="replayBtn">
                            <span>15</span>
                            <span>回复</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'comArea',
        props:["commend"],
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .comArea{
        margin-top: 1rem;
    }
    .head{
        width: 100%;
        height: 0.46rem;
        font-size: 0;
        line-height: 0.24rem;
        margin-bottom: 0.23rem;
    }
    .head>span{
        display: inline-block;
        width: 0.06rem;
        height: 0.43rem;
        border-radius: 1rem;
        background: #2b7afd;
        margin-top: -0.01rem;
        float: left;
    }
    .head>p:nth-of-type(1){
        margin: 0;
        font-size: 0.26rem;
        color: #545454;
        margin-left: 0.18rem;
    }
    .head>p:nth-of-type(2){
         margin: 0;
         font-size: 0.16rem;
         color: #d4d4d4;
         margin-left: 0.18rem;
    }
    ul>li{
        width: 100%;
        height: 1.3rem;
        background: white;
        border-radius: 0.1rem;
        padding: 0.24rem;
        box-sizing: border-box;
        margin-bottom: 0.14rem;
        box-shadow: 0 0.02rem 0.1rem 0.02rem rgba(0,0,0,0.1);
    }
    .user-head{
        width: 0.8rem;
        height: 0.8rem;
        background: #ccc;
        border-radius: 50%;
        float: left;
        overflow: hidden;
        font-size: 0;
    }
    .user-head>img{
        height: 100%;
    }
    .right{
        width: calc(100% - 0.81rem);
        height: 100%;
        position: relative;
        float: left;
        padding-left: 0.24rem;
        font-size: 0;
        box-sizing: border-box;
        line-height: 0.28rem;
    }
    .right>span:nth-of-type(1){
        display: block;
        font-size: 0.18rem;
        color: #b8b8b8;
    }
    .right>span:nth-of-type(2){
        display: block;
        font-size: 0.18rem;
        color: #737373;
        font-weight: bold;
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
    .replay{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .date{
        display: flex;
        align-items: center;
    }
    .date>span{
        display: inline-block;
        font-size: 0.18rem;
        color: #8d8d8d;
    }
    /*.replay>span:nth-of-type(2){
        display: inline-block;
        font-size: 0.18rem;
        color: #aeaeae;
    }*/
    .replayBtn>span:nth-of-type(1){
        display: inline-block;
        font-size: 0.18rem;
        color: #98e1ab;
        float: right;
        margin-left: 0.05rem;
    }
    .replayBtn>span:nth-of-type(2){
        display: inline-block;
        font-size: 0.18rem;
        color: #8d8d8d;
        float: right;
    }

</style>