<template>
    <div class="login">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="aname">
                <el-input type="text" v-model="ruleForm2.aname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="apass">
                <el-input type="password" v-model="ruleForm2.apass" auto-complete="off"></el-input>
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
        name:'login',
        data() {
            var validateAname = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            var validateApass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    aname: '',
                    apass: '',
                },
                rules2: {
                    aname: [
                        { validator: validateAname, trigger: 'blur' }
                    ],
                    apass: [
                        { validator: validateApass, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                var that=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (valid) {
                            fetch('/ajax/admin/checkLogin',{
                                method:"post",
                                headers:{                                "content-type":"application/x-www-form-urlencoded"
                                },
                                body:"aname="+this.ruleForm2.aname+"&apass="+this.ruleForm2.apass,
                            }).then(function(e){
                                return e.json();
                            }).then(function(e){
                                if(e.message=='err'){
                                    that.$router.push('/admin/login')
                                }else if(e.message=='success'){
                                    sessionStorage.loginInfo=JSON.stringify(e);
                                    that.$router.push('/admin')
                                }
                            })
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
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
    .login{
        width:500px;
        margin: auto;
        margin-top: 200px;
    }
</style>