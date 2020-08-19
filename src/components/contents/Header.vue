<template>
    <ul class="header">
        <li>
            <img class="margin_no" src="../../assets/img/nav01.png" alt="">
        </li>
        <li @click="back">
            <img src="../../assets/img/nav02.png" alt="">
            客户管理
        </li>
        <li @click="find">
            <img src="../../assets/img/nav03.png" alt="">
            日常管理
        </li>
        <li @click="find">
            <img src="../../assets/img/nav04.png" alt="">
            系统管理
        </li>
        <li @click="find">
            <img src="../../assets/img/nav05.png" alt="">
            日志
        </li>
        <li class="pic pic2"></li>
        <li class="pic pic1">
            <img src="../../assets/img/pic.png" alt="" @click="myMessage" />
            Hello, <span class="name">梵歌</span>
            <span class="arrow"><img src="../../assets/img/nav-arrow.png" alt=""></span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            myMessage() {
                this.$router.push({path:"/mymessage"});
            },
            back() {
                this.$router.push({path:"/index"});
            },
            find() {
                this.$router.push({path:"/notfound"});
            }
        }
    }
</script>

<style scoped lang="stylus">
    .header
        height 73px
        line-height 73px
        background url("../../assets/img/header-line.png") repeat-x
        display flex
        li
            padding 0 30px 0 22px
            color #212121
            font-size 16px
            cursor pointer
            height 66px
            border-right 1px solid #efefef
            img
                margin-right 15px
            .margin_no
                margin 0

        .pic
            border none
        .pic2
            flex 1
        .pic1
            border none
            border-left 1px solid #efefef
            float right
            padding 0 10px 0 22px
            .name
                color #2b91d1
            span
                display inline-block
                margin-right 20px
            .arrow
                margin-right 10px










</style>