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
                    update Emp info:
                </h1>
                <table cellpadding="0" cellspacing="0" border="0"
                       class="form_table">
                    <tr>
                        <td valign="middle" align="right">
                            id:
                        </td>
                        <td valign="middle" align="left" v-model="emp_id">{{$route.params.id}}</td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            姓名:
                        </td>
                        <td valign="middle" align="left">
                            <input type="text" class="inputgri" name="name" v-model="emp_name"/>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            照片:
                        </td>
                        <td valign="middle" align="left">
                            <input type="file" name="photo" ref="photo"/>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            工资:
                        </td>
                        <td valign="middle" align="left">
                            <input type="text" class="inputgri" name="salary" v-model="salary"/>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="right">
                            年龄:
                        </td>
                        <td valign="middle" align="left">
                            <input type="text" class="inputgri" name="age" v-model="age"/>
                        </td>
                    </tr>
                </table>
                <p align="left">
                    <input type="submit" class="button" @click="upd" value="修改"/>
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
        name: "Update",
        data() {
            return {
                emp_list: [],
                emp_id: '',
                emp_name: "",
                img: "",
                salary: "",
                age: "",
            }
        },
        methods: {
            get_id() {
                let id = this.$route.params.id;
                this.$axios.get("http://127.0.0.1:8000/users/emp/" + `${id}` + '/').then(res => {
                    this.emp_list = res.data.results;

                    this.emp_id = res.data.results.id;
                    this.emp_name = res.data.results.emp_name;
                    this.img = res.data.results.img;
                    this.salary = res.data.results.salary;
                    this.age = res.data.results.age;
                    console.log(this.emp_name)
                }).catch(error => {
                    this.$message.error('错误！');
                })
            },
            upd() {
                let formData = new FormData();
                formData.append("emp_name", this.emp_name);
                formData.append("img", this.$refs.photo.files[0]);
                formData.append("salary", this.salary);
                formData.append("age", this.age);
                this.$axios({
                    url: "http://127.0.0.1:8000/users/emp/" + this.$route.params.id+'/',
                    method: "put",
                    data: formData,
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }).then(res => {
                    console.log(res.data);
                    this.$message('修改成功');
                    this.$router.push("/emplist")
                }).catch(error => {
                    this.$message.error("修改失败")
                })
            }
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
            this.get_id();
        }
    }
</script>

<style scoped>

</style>
