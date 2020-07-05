<template>
    <div id="wrap">
        <div id="top_content">
            <div id="header">
                <div id="rightheader">
                    <p>
                        2009/11/20
                        <br/>
                        <a href="javascript:;" @click="exit">安全退出</a>
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
                    欢迎{{user_msg}}！
                </h1>
                <el-table
                    :data="emp_list"
                    height="250"
                    border
                    style="width: 100%">
                    <el-table-column
                        prop="id"
                        label="ID"
                        width="130">
                    </el-table-column>
                    <el-table-column
                        prop="emp_name"
                        label="姓名"
                        width="130">
                    </el-table-column>
                    <el-table-column
                        prop="img"
                        label="照片"
                        width="130">
                        <template slot-scope="scope">
                            <img :src="scope.row.img" style="width: 100px;height: 60px"/>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="salary"
                        label="工资"
                        width="130">
                    </el-table-column>
                    <el-table-column
                        prop="age"
                        label="年龄"
                        width="130">
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="130">
                        <template slot-scope="scope">
                            <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
                            <el-button type="text" size="small" v-model="id"><router-link :to="'/updata/'+scope.row.id">编辑</router-link></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <p align="left">
                    <el-button size="mini"><router-link to="/add">添加员工</router-link></el-button>
                </p>
            </div>
        </div>
        <div id="footer">
            <div id="footer_bg" align="left">
                ABC@126.com
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Emplist",
        data() {
            return {
                user_msg: '',
                id :'',
                emp_list: [],
            }
        },
        methods: {
            findALEmp() {
                this.$axios.get("http://127.0.0.1:8000/users/emp/").then(res => {
                    console.log(res.data.results);
                    this.emp_list = res.data.results
                }).catch(error => {
                    this.$message.error("查询失败！");
                })
            },
            del(id) {
                 this.$axios.delete("http://127.0.0.1:8000/users/emp/"+`${id}`+"/").then(res => {
                    this.$message('员工删除成功');
                    this.emp_list = res.data.results
                }).catch(error => {
                    this.$message.error("删除失败！");
                })
            },
            exit(){
            localStorage.clear();
            this.$router.push("/")
          },
        },
        created() {
            let username = localStorage.getItem("user");
            this.user_msg = username;
            console.log(username);
            if (username) {

            } else {
                this.$message.error("请先登录！");
                this.$router.push("/login")
            }
            this.findALEmp();
        }
    }
</script>

<style scoped>

</style>
