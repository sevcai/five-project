<template>
    <div class="Back">
        <div class="in-circle">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
//    import "../rem.js"
    export default {
//        name: 'Back'
    }
</script>

<style scoped>
    .Back{
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
        background: rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
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
</style>