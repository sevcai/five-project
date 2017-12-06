<template>
    <div>
        <router-view></router-view>
        <footer>
            <router-link :to="item.url" class="but" v-for="(item,key) in data" :key="key">
                <div class="but-img" @click="touch($event)">
                    <img :src="item.imgurl" alt="" class="imgs">
                </div>
            </router-link>
        </footer>
    </div>
</template>
<script>
    import '@/assets/js/jquery-3.2.1.js'
    export default {
        name: 'demo',
        data() {
            return {
                data:[
                    {url:'/',imgurl:'src/assets/img/footer5.png',imgurl2:'src/assets/img/footer1.png'},
                    {url:'/list',imgurl:'src/assets/img/footer6.png',imgurl2:'src/assets/img/footer2.png'},
                    {url:'/information',imgurl:'src/assets/img/footer7.png',imgurl2:'src/assets/img/footer3.png'},
                    {url:'/MyCenter',imgurl:'src/assets/img/footer8.png',imgurl2:'src/assets/img/footer4.png'},
                ]
            }
        },
        methods:{
            touch(event){
                let footer=event.currentTarget;


                $('.but').css({background:"#2b8aff"});
                let num=$(footer).index('.but-img')
                $(footer).parents('.but').css({background:"white"})
                for(let i=0;i<this.data.length;i++){
                    $('.imgs').eq(i).attr({src:this.data[i].imgurl})
                }
                $(footer).find('img').attr({src:this.data[num].imgurl2})
            }
        }
    }
</script>
<style scoped>
    footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #2b8aff;
        display: flex;
        justify-content: space-around;
        z-index: 999;
    }
    .but{
        width: 25%;
        height: 100%;
        background: #2b8aff;
    }
    /*.but:first-child{*/
        /*background: white;*/
    /*}*/
    .but-img{
        width: 0.88rem;
        height: 0.88rem;
        margin: 0.06rem auto;
        border-radius: 50%;
    }
    .but-img .imgs{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>