<template>
    <div>
        <el-button type="primary"  style="margin-bottom: 20px" @click="back()">返回</el-button>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="分类名称" prop="cname">
                <el-input type="text" v-model="ruleForm2.cname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: 'editCategory',
        data() {
            var validateCname= (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入分类名称'));
                }else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    cname: '',
                    cid:''
                },
                rules2: {
                    cname: [
                        { validator: validateCname, trigger: 'blur' }
                    ]
                }
            };
        },
        created(){
            this.ruleForm2.cid=this.$route.query.cid;
            this.ruleForm2.cname=this.$route.query.cname;
        },
        methods: {
            back(){
                this.$router.go(-1)
            },
            submitForm(formName) {
                var that=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var cname=this.ruleForm2.cname;
                        var cid=this.ruleForm2.cid;
                        fetch('/ajax/category/edit',{
                            method:"post",
                            headers:{                                "content-type":"application/x-www-form-urlencoded"
                            },
                            body:"cname="+cname+"&cid="+cid,
                        }).then(function(e){
                            return e.text();
                        }).then(function(e){
                            if(e=='ok'){
                                that.$message({
                                    showClose: true,
                                    type:"success",
                                    message: '修改成功',
                                    duration:1000
                                });
                                that.$router.push('/admin/category')
                            }else{
                                that.$message({
                                    showClose: false,
                                    type:"error",
                                    message: '修改失败',
                                    duration:1000
                                });

                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style scoped>
</style>