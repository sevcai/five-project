<template>
    <div class="body">

            <!--财经频道组件-->
            <finance :name="name" :names="names"></finance>
            <!--三个图的-->
            <router-link to="/commend"><con1 class="con "></con1></router-link>
            <!--两个图的-->
            <router-link to="/commend"><con2 class="con"></con2></router-link>
            <router-link to="/commend"><con1></con1></router-link>
            <!--专家讲坛组件-->
            <finance :name="namez" :names="namelz"></finance>
            <!--关注组件-->
            <guanzhu></guanzhu>
            <div class="black"></div>
    </div>
</template>

<script>
    import finance from '@/components/finance'
    import con1 from '@/components/con1'
    import con2 from '@/components/con2'
    import guanzhu from '@/components/guanzhu'
    export default {
        components:{finance,con1,con2,guanzhu},
        data() {
            return {
                name:"财经频道",
                names:"TIMEFINANCE NEWS",
                namez:"专家讲坛",
                namelz:"ZHUANJIAJIANGTAN"
            }
        }
    }
</script>


<style scoped>
    .black{
        width: 100%;
        height: 1.24rem;
    }
    .body{
        background:#f5f5f5;
        padding-top: 2.22rem;
    }
.con{
    margin-bottom: 0.12rem;
}


</style>