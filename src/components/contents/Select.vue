<template>
    <div class="select">
        <table>
            <tr>
                <td>
                    客户名称
                    <input type="text" v-model="name">
                </td>
                <td>
                    客户编码
                    <input type="text" v-model="ma">
                </td>
                <td>
                    联系电话
                    <input type="text" v-model="phone">
                </td>
                <td>
                    客户状态
                    <input type="text" v-model="state">
                </td>
            </tr>
            <tr>
                <td>
                    客户类型
                    <input type="text" v-model="type">
                </td>
                <td>
                    客户分类
                    <input type="text" v-model="classical">
                </td>
                <td>
                    客户来源
                    <input type="text" v-model="origin">
                </td>
                <td>
                    信用额度
                    <input type="text" v-model="money">
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <button style="color: #fff;background: #2f71a9" @click="search">查询</button>
                    <button style="color: #fff;background: #ec6b14" @click="addTodo">添加</button>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: "Select",
        data() {
            return {
                name:"",ma:"",phone:"",state:"",type:"",classical:"",origin:"",money:"",

            }
        },
        props: {
            todo:Array,
            searchResult:Function
        },
        methods: {
            addTodo(){
                let obj = {name:this.name,flag:false,ma:this.ma,phone:this.phone,
                    state:this.state,type:this.type,classical:this.classical,
                    origin: this.origin,money: this.money };
                this.$emit("addTodo",obj);
                this.name = "";
                this.ma = "";
                this.phone = "";
                this.state = "";
                this.type = "";
                this.classical = "";
                this.origin = "";
                this.money = "";
            },

            search() {
                let obj = {name:this.name,flag:false,ma:this.ma,phone:this.phone,
                    state:this.state,type:this.type,classical:this.classical,
                    origin: this.origin,money: this.money };
                this.$emit("search",obj);
                this.name = "";
                this.ma = "";
                this.phone = "";
                this.state = "";
                this.type = "";
                this.classical = "";
                this.origin = "";
                this.money = "";
            }

        },

    }
</script>

<style scoped lang="stylus">
    .select
        width 93%
        height 178px
        background #fff
        margin-left 30px
        color #2d2d2d
        font-size 14px
        padding 10px 0 0 30px
        td
            height 60px
            text-align center
            padding-right 15px
        input
            width 170px
            height 25px
            border 1px solid #ccc
            border-radius 5px
            margin-left 15px
        button
            padding 5px 10px
            border-radius 5px
            margin-left 20px
            cursor pointer




</style>