<template>
    <div>
        <el-button type="primary"  style="margin-bottom: 20px" @click="back()">返回</el-button>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="分类名称" prop="cname">
                <el-input type="text" v-model="ruleForm2.cname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: 'addCategory',
        data() {
            var validateCname = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入分类名称'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    cname: ''
                },
                rules2: {
                    cname: [
                        { validator: validateCname, trigger: 'blur' }
                    ]
                }
            };
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
                        fetch('/ajax/category/add',{
                            method:"post",
                            headers:{                                "content-type":"application/x-www-form-urlencoded"
                            },
                            body:"cname="+cname,
                        }).then(function(e){
                            return e.text();
                        }).then(function(e){
                            if(e=='ok'){
                                that.$message({
                                    showClose: true,
                                    type:"success",
                                    message: '添加成功',
                                    duration:1000
                                });
                            }else{
                                that.$message({
                                    showClose: false,
                                    type:"error",
                                    message: '添加失败',
                                    duration:1000
                                });

                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style scoped>
</style>