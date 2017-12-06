<!--组件-->
<template>
    <div>
        <div class="tag" >
            <!--<router-link class="row" to="" v-for="(item,key) in data" :key="key" exact>{{item.title}}</router-link>-->
            <div class="row" v-for="item in data" @click="click($event)">{{item.title}}</div>
        </div>
    </div>
</template>
<!--数据、逻辑-->
<script>
    export default {
        name: '',
        data(){
            return{
                data:[{title:"财经报道"},{title:"专家讲坛"},{title:"白话资讯"}]
            }
        },
        methods:{
            click(event){
                let rowone=event.currentTarget
                var row=document.querySelectorAll('.row');
                for(let j=0;j<row.length;j++){
                    row[j].style.background='#4380fb';
                    row[j].style.color='#b2c6fd';
                }
                rowone.style.background='white';
                rowone.style.color='#2c69e4';
            }
        }
    }
</script>
<!--样式-->
<style scoped>
    .tag{
        width: 7.03rem;
        height:0.66rem;
        /*background: yellow;*/
        display: flex;
        justify-content: space-between;
    }
    .row{
        width: 2.23rem;
        height:0.66rem;
        background: #4380fb;
        line-height: 0.66rem;
        text-align: center;
        font-size: 0.33rem;
        letter-spacing: 0.02rem;
        border-radius: 0.33rem;
        color: #b2c6fd;
    }
    .row:first-child{
        color: #2c69e4;
        background: white;
    }
    /*.active{*/
        /*color: #2c69e4;*/
        /*background: white;*/
    /*}*/
</style>