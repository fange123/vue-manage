import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Index from './components/Index'
import MyMessage from './components/contents/MyMessage'


Vue.use(Router)
export default new Router({
    routes:[
        {path:"/",name:"Login",component:Login},
        {path:"*",name:"NotFound",component:NotFound},
        {path:"/index",name:"Index",component:Index},
        {path:"/mymessage",name:"MyMessage",component:MyMessage}
    ]
});