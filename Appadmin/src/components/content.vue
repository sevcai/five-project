<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="ctitle"
                    label="标题"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="con"
                    label="内容"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="uname"
                    label="作者">
            </el-table-column>
            <el-table-column
                prop="cname"
                label="分类">
            </el-table-column>
            <el-table-column
                    prop="condate"
                    label="发布时间">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
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
        name: 'content',
        data() {
            return {
                tableData: [],
            }
        },
        methods: {
            handleDelete(index, row) {
                var that=this;
                fetch('/ajax/content/del',{
                    method:"post",
                    headers:{                                "content-type":"application/x-www-form-urlencoded"
                    },
                    body:"conid="+row.conid,
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
            fetch('/ajax/content/select').then(function (e) {
                return e.json();
            }).then(function (e) {
                that.tableData=e;
            })
        }
    }
</script>
<style scoped>
</style>