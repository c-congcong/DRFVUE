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
                    login
                </h1>
                <table cellpadding="0" cellspacing="0" border="0"
                       class="form_table">
                    <tr>
                        <td valign="middle" align="right">
                            账号:
                        </td>
                        <td valign="middle" align="left">
                            <el-input v-model="name" placeholder="请输入账号/手机号/用户名"></el-input>
<!--                            <input type="text" class="inputgri" name="name"/>-->
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            密码:
                        </td>
                        <td valign="middle" align="left">
                            <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
                            <!--                            <input type="password" class="inputgri" name="pwd"/>-->
                        </td>
                    </tr>
                </table>
                <p align="left">
                    <el-button size="mini" @click="login">登录</el-button>
                    <router-link to="/register">
                        <el-button size="mini" type="primary">注册</el-button>
                    </router-link>
                </p>
            </div>
        </div>
        <div id="footer" align="left">
            <div id="footer_bg">
                ABC@126.com
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                name: '',
                pwd: '',
            }
        },
        methods:{
            login(){
                this.$axios({
                    url:"http://127.0.0.1:8000/users/login/",
                    methods: "get",
                    params:{
                        username: this.name,
                        password: this.pwd,
                    }
                }).
                then(results => {
                    // this.emp_list = res.data.results;
                    //跳转到主界面
                    let username = results.data.results["username"];
                    // let user = results.data.results;
                    localStorage.setItem("user",username);
                    // localStorage.setItem("user",JSON.stringify(user));


                    this.$router.push("/emplist")
                }).catch(error => {
                    this.$message.error("账号或密码不正确")
                })
            }
        }
    }
</script>

<style scoped>

</style>
