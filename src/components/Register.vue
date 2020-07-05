<template>
    <div id="wrap">
        <div id="top_content">
            <div id="header">
                <div id="rightheader">
                    <p>
                        2009/11/20
                        <br/>
                    </p>
                </div>
                <div id="topheader">
                    <h1 id="title" align="left">
                        <a href="#">main</a>
                    </h1>
                </div>
                <div id="navigation">
                </div>
            </div>
            <div id="content">
                <p id="whereami">
                </p>
                <h1 align="left">
                    注册
                </h1>
                <table cellpadding="0" cellspacing="0" border="0"
                       class="form_table">
                    <tr>
                        <td valign="middle" align="right">
                            用户名:
                        </td>
                        <td valign="middle" align="left">
                            <el-input v-model="name1" ></el-input>
                            <!--                            <input type="text" class="inputgri" name="username"/>-->
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            真实姓名:
                        </td>
                        <td valign="middle" align="left">
                            <el-input v-model="name2" ></el-input>
                            <!--                            <input type="text" class="inputgri" name="name"/>-->
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            密码:
                        </td>
                        <td valign="middle" align="left">
                            <el-input placeholder="请输入密码" v-model="input_pwd1" show-password></el-input>
                            <!--                            <input type="password" class="inputgri" name="pwd"/>-->
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            确认密码:
                        </td>
                        <td valign="middle" align="left">
                            <el-input placeholder="请输入密码" v-model="input_pwd2" show-password></el-input>
                            <!--                            <input type="password" class="inputgri" name="pwd"/>-->
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            性别:
                        </td>
                        <td valign="middle" align="left">
                            <el-radio v-model="radio" label="0">男</el-radio>
                            <!--                            <input type="radio" class="inputgri" name="sex" value="m" checked="checked"/>-->
                            <el-radio v-model="radio" label="1">女</el-radio>
                            <!--                            <input type="radio" class="inputgri" name="sex" value="f"/>-->
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            注册时间:
                        </td>
                        <td>
                            <div class="block">
                                <span class="demonstration"></span>
                                <el-date-picker
                                    v-model="data1"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </div>
                        </td>
                    </tr>

                </table>
                <p align="left">
                    <el-button size="mini" type="primary" @click="user_register">立即创建</el-button>
                </p>
            </div>
        </div>
        <div id="footer">
            <div align="left" id="footer_bg">
                ABC@126.com
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                name1: '',
                name2: '',
                input_pwd1: '',
                input_pwd2: '',
                radio:'',
                data1: '',

            }
        },
        methods: {
            user_register(){
                this.$axios({
                    url:'http://127.0.0.1:8000/users/user/',
                    method:"post",
                    data:{
                        username: this.name1,
                        real_name: this.name2,
                        password: this.input_pwd1,
                        password2: this.input_pwd2,
                        gender:this.radio,
                        register_time: this.data1,
                    }
                }).then(results => {
                    // console.log(results.data);
                    if (confirm("注册成功，是否登录")){
                        //跳转到登录界面
                        this.$router.push("/login")
                        // window.location.href='http://localhost:8080/';
                    }

                }).catch(error => {
                    this.$message.error("添加失败")
                })
            },

        }
    }

</script>

<style scoped>

</style>
