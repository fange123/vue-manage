<template>
    <div class="index">
        <div class="aside">
            <h2>弥尔后台管理系统</h2>
            <ul class="list">
                <li class="client active" ref="client">
                    <Client @clientBtn="client"></Client>
                </li>
                <li class="message" ref="message">
                    <Message @messageBtn="message"></Message>
                </li>
                <li class="assess" ref="assess">
                    <Assess @assessBtn="assess"></Assess>
                </li>
                <li class="product" ref="product">
                    <Product @productBtn="product"></Product>
                </li>
                <li class="warn" ref="warn">
                    <Warn @warnBtn="warn"></Warn>
                </li>
            </ul>
        </div>
        <div class="contents">
            <Header></Header>
            <Nav></Nav>
            <Select ref="select" :todo="todo"></Select>
            <Item :todo="todo" :delItem="delTodo" :sel="sel"></Item>
        </div>
    </div>
</template>

<script>
    import Client from './aside/Client'
    import Message from './aside/Message'
    import Assess from './aside/Assess'
    import Product from './aside/Product'
    import Warn from './aside/Warn'
    import Header from './contents/Header'
    import Nav from './contents/Nav'
    import Select from './contents/Select'
    import Item from './contents/Item'
    export default {
        name: "Index",
        components: {
            Warn,
            Message,
            Client,
            Assess,
            Product,
            Header,
            Nav,
            Select,
            Item
        },
        data() {
            return {
                todo: [
                    {"flag":false,"name":"张大宝","ma":"247549939","phone":"18943006095","state":"有效","type":"成交客户","classical":"餐饮单体","origin":"微信","money":"2000","index":"1"},
                    {"flag":false,"name":"肖战","ma":"549247939","phone":"18906095430","state":"有效","type":"成交客户","classical":"旅游单体","origin":"微博","money":"1000","index":"2"},
                    {"flag":false,"name":"王一博","ma":"499392475","phone":"18609430095","state":"失效","type":"成交客户","classical":"餐饮单体","origin":"微信","money":"2500","index":"3"},
                    {"flag":false,"name":"张大宝","ma":"247549939","phone":"18943006095","state":"有效","type":"成交客户","classical":"餐饮单体","origin":"微信","money":"2000","index":"4"},
                    {"flag":false,"name":"肖战","ma":"549247939","phone":"18906095430","state":"有效","type":"成交客户","classical":"旅游单体","origin":"微博","money":"1000","index":"5"},
                    {"flag":false,"name":"王一博","ma":"499392475","phone":"18609430095","state":"失效","type":"成交客户","classical":"餐饮单体","origin":"微信","money":"2500","index":"6"},
                ],
            }
        },
        methods: {
            client() {
                this.$refs.assess.style.backgroundColor = 'transparent'; //修改属性
                this.$refs.message.style.backgroundColor = 'transparent';
                this.$refs.product.style.backgroundColor = 'transparent';
                this.$refs.warn.style.backgroundColor = 'transparent';
                this.$refs.client.style.backgroundColor = '#6ebbe5';
            },
            assess() {
                this.$refs.assess.style.backgroundColor = '#6ebbe5'; //修改属性
                this.$refs.message.style.backgroundColor = 'transparent';
                this.$refs.product.style.backgroundColor = 'transparent';
                this.$refs.warn.style.backgroundColor = 'transparent';
                this.$refs.client.style.backgroundColor = 'transparent'

            },

            message() {
                this.$refs.message.style.backgroundColor = '#6ebbe5';
                this.$refs.product.style.backgroundColor = 'transparent';
                this.$refs.warn.style.backgroundColor = 'transparent';
                this.$refs.client.style.backgroundColor = 'transparent';
                this.$refs.assess.style.backgroundColor = 'transparent';
            },

            product() {
                this.$refs.product.style.backgroundColor = '#6ebbe5';
                this.$refs.warn.style.backgroundColor = 'transparent';
                this.$refs.client.style.backgroundColor = 'transparent';
                this.$refs.assess.style.backgroundColor = 'transparent';
                this.$refs.message.style.backgroundColor = 'transparent';
            },

            warn() {
                this.$refs.warn.style.backgroundColor = '#6ebbe5';
                this.$refs.client.style.backgroundColor = 'transparent';
                this.$refs.assess.style.backgroundColor = 'transparent';
                this.$refs.message.style.backgroundColor = 'transparent';
                this.$refs.product.style.backgroundColor = 'transparent';

            },

            addTodo(obj) {
                obj.index = this.todo.length + 1;
                this.todo.push(obj);
            },
            search(obj) {
                this.todo = this.todo.filter(
                    item =>
                        item.name.indexOf(obj.name) > -1
                );
            },
            sel(flag) {
                this.todo.forEach(todo => todo.flag = flag)
            },
            delTodo() {
                this.todo = this.todo.filter((todo) => !todo.flag);
            },

        },

        mounted() {
            this.$refs.select.$on("addTodo",this.addTodo);
            this.$refs.select.$on("search",this.search);
        }

    }
</script>
<style scoped lang="stylus">
    .index
        width 100%
        display flex
        height 800px
        background #21212c
        overflow hidden
        color #fff
        font-size 16px
        .aside
            width 22%
            float left
            h2
                background #353646
                color #49a0f9
                font-size 20px
                letter-spacing 3px
                text-indent 3px
                padding 28px 0 20px 34px
            li
                height 54px
                line-height  54px
                padding:0 0 0 42px
                letter-spacing 2px
                text-indent 2px
                cursor pointer
            .client
                height 70px
                line-height  70px
            .active
                background #6ebbe5
        .contents
            float left;
            background #f1f4f6
            flex 1
</style>