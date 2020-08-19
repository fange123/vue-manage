<template>
    <li>
        <input type="checkbox" v-model="todo.flag"> <span>{{todo.index}}</span> <span>{{todo.name}}</span><span>{{todo.type}}</span>
        <span>{{todo.phone}}</span> <span>{{todo.ma}}</span><span>{{todo.state}}</span> <span>{{todo.classical}}</span>
        <span>{{todo.origin}}</span><span>{{todo.money}}</span>
    </li>
</template>

<script>

    export default {
        name: "Li",
        props: {
            todo: Object,
        },
        data() {
            return {

            }
        },

    }
</script>

<style scoped lang="stylus">
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

</style>