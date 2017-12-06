<template>
    <div>
        <el-button type="primary"  style="margin-bottom: 20px" @click="back()">返回</el-button>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="uname">
                <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input type="text" v-model="ruleForm2.email" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="phone">
                <el-input type="text" v-model="ruleForm2.phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: 'editMember',
        data() {
            var checkPhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入手机号'));
                }else{
                    callback()
                }
            };
            var validateUname = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            var validateEmail= (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入邮箱'));
                }else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    uname: '',
                    email: '',
                    phone: '',
                    uid:''
                },
                rules2: {
                    uname: [
                        { validator: validateUname, trigger: 'blur' }
                    ],
                    email: [
                        { validator: validateEmail, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: checkPhone, trigger: 'blur' }
                    ]
                }
            };
        },
        created(){
            this.ruleForm2.uid=this.$route.query.uid;
            this.ruleForm2.uname=this.$route.query.uname;
            this.ruleForm2.email=this.$route.query.email;
            this.ruleForm2.phone=this.$route.query.phone;
        },
        methods: {
            back(){
                this.$router.go(-1)
            },
            submitForm(formName) {
                var that=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var uname=this.ruleForm2.uname;
                        var email=this.ruleForm2.email;
                        var phone=this.ruleForm2.phone;
                        var uid=this.ruleForm2.uid;
                        fetch('/ajax/user/edit',{
                            method:"post",
                            headers:{                                "content-type":"application/x-www-form-urlencoded"
                            },
                            body:"uname="+uname+"&email="+email+"&phone="+phone+"&uid="+uid,
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
                                that.$router.push('/admin/user')
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