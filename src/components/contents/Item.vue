<template>
    <div>
        <ul class="list">
            <li>
                <ul class="nav">
                    <li @click="delAll">删除用户</li>
                    <li class="color1">批量导出</li>
                    <li class="color1">导出客户</li>
                    <li class="color2">分配</li>
                    <li class="color2">查看地图</li>
                </ul>
            </li>
            <li class="header">
                <input type="checkbox" v-model="checked"> <span>编号</span> <span>客户名称</span><span>客户类型</span>
                <span>联系电话</span> <span>客户编码</span><span>客户状态</span> <span>客户分类</span>
                <span>客户来源</span><span>信用额度</span>
            </li>
            <Li v-for="(value,index) of todo" :key="id[index]" :todo="value"></Li>

        </ul>
    </div>

</template>

<script>
    import Li from "./Li"
    import shortId from "shortid"
    export default {
        name: "Item",
        props: {
            todo: Array,
            delItem: Function,
            sel:Function
        },
        components: {
            Li
        },
        data() {
            return {
                id: [],
            }
        },
        methods: {
            delAll() {
                this.delItem()
            }
        },
        mounted() {
            this.id = this.todo.map( () => shortId.generate())
        },
        computed: {
            checked:{
                set(value){
                    this.sel(value);
                },
                get(){
                    return this.todo
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    .list
        width 93%
        background #fff
        margin-left 30px
        color #2d2d2d
        font-size 14px
        padding 10px 0 100px 30px
        margin-top 30px
        .header
            background #e4eaec
        li
            height 46px
            line-height 46px
            text-align center
            span
                display inline-block
                width 10%
                border-left 1px solid #ccc
            input
                width 84px

        .nav
            height 27px
            margin 10px 0
            display flex
            width 60%
            li
                border-radius 5px
                background #ffad1f
                color #fff
                margin 0 5px
                padding 0 10px
                height 27px
                line-height 27px
                cursor pointer
            .color1
                background #2f71a9
            .color2
                background #28acb8





</style>