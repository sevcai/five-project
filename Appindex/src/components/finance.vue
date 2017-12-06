<template>
    <div>
        <div class="finance">
            <div class="cj">
                <div class="lan1">
                    <img src="../assets/img/lan1.png" alt="">
                </div>
                <div class="name">
                    <span>{{name}}</span>
                </div>
                <div class="names">
                    <span>{{names}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//    import childtag from '@/components/childtag'
    export default {
        props:["name","names"],
//    components:{childtag}
    }
</script>

<style scoped>
    .finance{
        width: 100%;
        height:0.93rem;
        background: #f5f5f5;
        overflow: hidden;
    }
    .cj{
        width: 2.3rem;
        height:0.52rem;
        margin-top: 0.24rem;
        margin-left: 0.24rem;
        /*background: yellow;*/
    }
    .lan1{
        width: 0.06rem;
        height: 0.43rem;
        float: left;
        margin-top: 0.02rem;
    }
    .lan1>img{
        display: block;
        width: 0.06rem;
        height: 0.43rem;
    }
    .name{
        width: 1.13rem;
        height:0.28rem;
        margin-left: 0.11rem;
        font-size: 0.28rem;
        font-family: 苹方;
        line-height: 0.28rem;
        color: #575757;
    }
    .names{
        width: 2.9rem;
        height: 0.13rem;
        font-size: 0.14rem;
        line-height: 0.13rem;
        margin-left: 0.11rem;
        margin-top: 0.06rem;
        color: #d4d4d4;
    }
</style>