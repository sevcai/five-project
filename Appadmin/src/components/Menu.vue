<template>
    <div>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/admin/user">用户信息</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>分类管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/admin/category">分类信息</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>内容管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/admin/content">查看内容</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>留言管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/admin/message">查看留言</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'Menu',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>
</style>