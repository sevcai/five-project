<template>
    <div class="shareBox">
        <div class="sTop">
            <div class="Back" @click="back()">
                <div class="in-circle">
                    <img src="../assets/img/back.png" alt="">
                </div>
            </div>
            <div class="sTitle">
                <div class="heng"></div>
                <span>我的理财</span>
                <div class="heng1"></div>
            </div>
        </div>
        <div class="fenge">
            <div class="circle1"></div>
            <div class="circle2"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {

            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
        }
    }
</script>
<style scoped>
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
        letter-spacing: 0.02rem;
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

</style>
