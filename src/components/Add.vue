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
                        <a href="#">Main</a>
                    </h1>
                </div>
                <div id="navigation">
                </div>
            </div>
            <div id="content">
                <p id="whereami">
                </p>
                <h1 align="left">
                    增加员工:
                </h1>
                <table cellpadding="0" cellspacing="0" border="0"
                       class="form_table">
                    <tr>
                        <td valign="middle" align="right">
                            姓名:
                        </td>
                        <td valign="middle" align="left">
                            <input type="text" class="inputgri" v-model="emp_name" name="name" @blur="name2"/>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            照片:
                        </td>
                        <td valign="middle" align="left">
                            <input type="file" ref="photo" name="photo"/>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            工资:
                        </td>
                        <td valign="middle" align="left">
                            <input type="text" v-model="salary" class="inputgri" name="salary" @blur="sal"/>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            年龄:
                        </td>
                        <td valign="middle" align="left">
                            <input type="text" v-model="age" class="inputgri" name="age" @blur="age1"/>
                        </td>
                    </tr>
                </table>
                <p align="left">
                    <el-button type="info" plain round size="mini" @click="add">提交</el-button>
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
        name: "Add",
        data() {
            return {
                emp_name: "",
                img: '',
                salary: "",
                age: "",
            }
        },
        methods: {
            name2() {
                if (this.emp_name === '') {
                    this.$message.error('员工名不能为空');
                } else if (this.emp_name.length < 2) {
                    this.$message.error('名字不合法');
                } else if (this.emp_name.length > 4) {
                    this.$message.error('名字不合法');
                }
            },
            sal() {
                if (this.salary === '') {
                    this.$message.error('薪水不能为空');
                }
            },
            age1() {
                if (this.age === '') {
                    this.$message.error('年龄不能为空');
                } else if (this.age < 10) {
                    this.$message.error('啥也不是');
                } else if (this.age > 99) {
                    this.$message.error('神仙？');
                }
            },
            add() {
                let formData = new FormData();
                    formData.append("emp_name", this.emp_name);
                    formData.append("img", this.$refs.photo.files[0]);
                    formData.append("salary", this.salary);
                    formData.append("age", this.age);
                this.$axios({
                    url: "http://127.0.0.1:8000/users/emp/",
                    method: "post",
                    data: formData,
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }).then(res => {
                    console.log(res.data);
                    this.$message('添加成功');
                    this.$router.push("/emplist")
                }).catch(error => {
                    console.log(this.img);
                    this.$message.error("添加失败")
                })
            }
        },
        created() {
            let username = localStorage.getItem("user");
            console.log(username);
            if (username) {
                this.name = username
            } else {
                this.$message.error('请先登录');
                this.$router.push("/login")
            }
        }
    }

</script>

<style scoped>

</style>
