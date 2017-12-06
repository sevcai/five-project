<template>
    <div class="guanzhubox">
        <div class="conbox">
            <div class="neibox">
                <div class="touxiangbox">
                    <img src="" alt="">
                </div>
                <div class="zibox">
                    <div class="zic">
                        <span>Jim.Greem</span>
                    </div>
                    <div class="ins">
                        <span>首都财经杂志主编</span>
                    </div>
                    <div class="inss">
                        <span>首都财经杂志主编</span>
                    </div>
                </div>

                <div class="btn">
                    <div class="xingbox">
                        <img src="../assets/img/xingxing_39.png" alt="">
                    </div>
                    <div class="gz">
                        <span>关注</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {}
        }
    }
</script>


<style scoped>
    .guanzhubox{
        width: 100%;
        height:1.71rem;
        background: #f5f5f5;
    }
    .conbox{
        width: 7.03rem;
        height: 1.71rem;
        margin: auto;
        background: #ffffff;
        overflow: hidden;
        border-radius: 0.10rem;
    }
    .neibox{
        width: 6.57rem;
        height: 0.57rem;
        /*background: red;*/
        margin-left: 0.21rem;
        margin-top: 0.24rem;
    }
    .touxiangbox{
        width: 0.57rem;
        height: 0.57rem;
        background: yellowgreen;
        border-radius: 50%;
        margin-left: 0.03rem;
        float: left;
    }
    .touxiangbox>img{
        display: block;
        width: 0.57rem;
        height: 0.57rem;
    }
    .zibox{
        width: 3.86rem;
        height:0.57rem;
        /*background: blue;*/
        float: left;
        margin-left: 0.23rem;
    }
    .zic{
        width: 1.52rem;
        height: 0.25rem;
        /*background: yellow;*/
        margin-top: 0.02rem;
        margin-left: 0.01rem;
        font-size: 0.25rem;
    }
    .zic>span{
        display: block;
        width: 100%;
        height:100%;
        line-height: 0.25rem;
        color: #6a96e7;
    }
    .ins{
        /*width: 1.60rem;*/
        width: auto;
        height:0.20rem;
        /*background: yellow;*/
        margin-top: 0.07rem;
        float: left;
    }
    .ins>span{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0.20rem;
        line-height: 0.20rem;
        color: #b8b8b8;
    }
    .inss{
        /*width: 1.60rem;*/
        width: auto;
        height:0.20rem;
        /*background: yellow;*/
        margin-top: 0.07rem;
        float: left;
        margin-left: 0.07rem;
    }
    .inss>span{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0.20rem;
        line-height: 0.20rem;
        color: #b8b8b8;
    }
    .btn{
        width: 1.09rem;
        height: 0.47rem;
        background: #3a7cfc;
        float: right;
        margin-top: 0.05rem;
        border-radius: 0.23rem;
    }
    .xingbox{
        width: 0.33rem;
        height: 0.33rem;
        /*background: yellow;*/
        margin-top: 0.07rem;
        margin-left: 0.07rem;
        float: left;
    }
    .xingbox>img{
        display: block;
        width: 100%;
        height:100%;
    }
    .gz{
        width: 0.40rem;
        height: 0.47rem;
        /*background: yellow;*/
        float: left;
        margin-left: 0.07rem;
    }
    .gz>span{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0.19rem;
        line-height: 0.47rem;
        color: #e1e9ff;
    }
</style>