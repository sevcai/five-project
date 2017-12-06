<template>
    <div>
        <router-link to="/admin/add"><el-button type="primary"  style="margin-bottom: 10px">添加用户</el-button></router-link>
        <!--<el-upload-->
                <!--class="upload-demo"-->
                <!--ref="upload"-->
                <!--name="files"-->
                <!--action="/ajax/user/upload"-->
                <!--:on-success="success"-->
                <!--:on-preview="handlePreview"-->
                <!--:on-remove="handleRemove"-->
                <!--:file-list="fileList"-->
                <!--:auto-upload="false">-->
            <!--<el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
            <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
        <!--</el-upload>-->
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="uname"
                    label="用户名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="邮箱"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="联系方式">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'table',
        data() {
            return {
                tableData: [],
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
        },
        methods: {
            handleEdit(index, row) {
                this.$router.push({path:'/admin/edit',query:row})
            },
            handleDelete(index, row) {
                var that=this;
                fetch('/ajax/user/del',{
                    method:"post",
                    headers:{                                "content-type":"application/x-www-form-urlencoded"
                    },
                    body:"uid="+row.uid,
                }).then(function (e) {
                    return e.text()
                }).then(function (e) {
                    if(e=='ok'){
                        that.$message({
                            showClose: true,
                            type:"success",
                            message: '删除成功',
                            duration:1000
                        });
                        that.tableData.splice(index,1)
                    }else {
                        that.$message({
                            showClose: false,
                            type: "error",
                            message: '删除失败',
                            duration: 1000
                        });
                    }
                })
            },
            success() {
                this.$message({
                    showClose: true,
                    type:'success',
                    message: '上传成功',
                    duration: 1000
                });
            },

                submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        },
        created(){
            var that=this;
            fetch('/ajax/user/select').then(function (e) {
                return e.json();
            }).then(function (e) {
                that.tableData=e;
            })
        }
    }
</script>
<style scoped>
</style>