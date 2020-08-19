<template>
   <p class="nav"><a href="#" :class="[active1,one]">客户管理系统</a> > <a href="#" :class="active">客户信息</a> > <a href="#" :class="active2">客户评估</a></p>
</template>

<script>
   import Bus from '../../assets/style/bus'
    export default {
        name: "Nav",
       data() {
           return {
              active:"",
              active1:"active",
              active2:"",
              one:"one"
           }
       },
       methods:{
          bbtn(){
             Bus.$on("client",()=>{   //这里最好用箭头函数，不然this指向有问题
                this.active = '';
                this.active1 = 'active';
                this.one = '';
                this.active2 = '';
             });
             Bus.$on("message",()=>{   //这里最好用箭头函数，不然this指向有问题
                this.active = 'active';
                this.active1 = '';
                this.one = '';
                this.active2 = '';
             });
             Bus.$on("assess",()=>{   //这里最好用箭头函数，不然this指向有问题
                this.active2 = 'active';
                this.active1 = '';
                this.one = '';
                this.active = ''
             })
          }
       },
       mounted() {
           this.bbtn();
       }

    }
</script>

<style scoped lang="stylus">
    .nav
        padding-left 30px
        width 370px
        display flex
        height 28px
        line-height 28px
        font-size 16px
        color #282834
        margin 25px 0
        .one
            flex  0 0 100px
        a
            display inline-block
            color #282834
            text-align center
            padding 0 10px
            border-radius 5px
            margin:0 10px
    .active
            color #fff
            background #6ebbe5

</style>