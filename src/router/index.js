import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Register from "../components/Register";
import Emplist from "../components/Emplist";
import Add from "../components/Add";
import Update from "../components/Update";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/emplist',
            name: 'emplist',
            component: Emplist
        },
        {
            path: '/add',
            name: 'add',
            component: Add
        },
        {
            path: '/updata',
            name: 'updata',
            component: Update
        },
        {
            path: '/updata/:id',
            name: 'update',
            component: Update,
        },
    ]
})
