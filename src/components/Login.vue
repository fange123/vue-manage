<template>
    <div class="login">
        <div class="tit">
            <img src="../assets/img/login-tit.png" alt="" />
        </div>
        <div class="form">
            <p class="name">
                <label>用户名</label>
                <input type="text">
            </p>
            <p class="password">
                <label>密码</label>
                <input type="password">
            </p>
            <p>
                <button @click="login">登录</button>
            </p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            login(){ //页面跳转
                this.$router.push({path:"/index"})
            }
        }
    }
</script>

<style scoped lang="stylus">
    .login
        width 100%
        background url("../assets/img/login-bg.png") no-repeat
        background-size 100%
        padding 100px 0 60px 0
        .tit
            width 300px
            margin auto
            img
                width 100%
        .form
            width 580px
            height 400px
            margin 65px auto 0
            background url("../assets/img/login-form.png") no-repeat
            padding-top 86px
            p
                margin 0 auto 85px
                width 380px
                color #37ceff
                font-size 20px
                letter-spacing 12px
                text-indent 12px
                text-align center
                input
                    width 282px
                    height 39px
                    background url("../assets/img/login-input.png") no-repeat
                    padding-left 3px
                    color #37ceff
                label
                    width 80px
                    text-align left
                    display inline-block
                button
                    width 185px
                    height 52px
                    background url("../assets/img/login-btn.png") no-repeat
                    background-size 100%
                    color #ffffff
                    text-align center
                    letter-spacing 2px
                    text-indent 2px
                    cursor pointer
            .name
                label
                    letter-spacing 2px
                    text-indent 2px







</style>