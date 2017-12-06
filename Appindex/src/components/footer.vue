<template>
    <div>
        <footer>
            <router-link to="/" class="but">
                <div class="but-img"></div>
            </router-link>
            <router-link to="/list" class="but">
                <div class="but-img"></div>
            </router-link>
            <router-link to="/" class="but">
                <div class="but-img"></div>
            </router-link>
            <router-link to="/MyCenter" class="but">
                <div class="but-img"></div>
            </router-link>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'footer',
        data() {
            return {

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
    }
    .but-img{
        width: 0.9rem;
        height: 0.9rem;
        margin: 0.05rem auto;
        background: pink;
        border-radius: 50%;
    }
</style>