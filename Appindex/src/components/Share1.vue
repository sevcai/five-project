<template>
    <div class="Share">
        <div class="in-circle">
            <img src="../assets/img/share.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Back'
    }
</script>

<style scoped>
    .Share{
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
        background: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
    }
    .in-circle{
        width: 0.58rem;
        height: 0.58rem;
        background: #fbfbfb;
        border-radius: 50%;
        margin: 0 auto;
        position: relative;
    }
    .in-circle>img{
        width: 0.26rem;
        height: 0.26rem;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
</style>