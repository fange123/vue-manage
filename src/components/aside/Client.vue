<template>
    <div class="client" @click="client">
        <span class="img"><img :src="img4" alt=""></span>
        客户管理系统
        <span class="arrow"><img :src="img3" alt=""></span>
    </div>
</template>

<script>
    import img1 from '../../assets/img/icon.png'
    import img2 from '../../assets/img/back.png'
    import img3 from '../../assets/img/sanjiao.png'
    import img4 from '../../assets/img/icon-on.png'
    import Bus from '../../assets/style/bus'
    export default {
        name: "Client",
        data() {
            return {
                img1:img1,
                img2:img2,
                img3:img3,
                img4:img4,
                img01:"",
                img02:"",
                show1:true,
                show2:true,
            }
        },
        methods: {

            client() {
                Bus.$emit("client",this.msg);   //$emit这个方法会触发一个事件
                if(this.show1 == true){
                    this.img01 = this.img4;
                    this.img4 = this.img1;
                }
                if(this.show1 == false){
                    this.img4 = this.img01;
                    this.img01 = ""
                }
                if(this.show2 == true){
                    this.img02 = this.img3;
                    this.img3= this.img2;
                }
                if(this.show2 == false){
                    this.img3 = this.img02;
                    this.img02 = ""
                }
                this.show1 = !this.show1;
                this.show2 = !this.show2;
                this.$emit("clientBtn");


            }

        },
    }
</script>

<style scoped lang="stylus">
    .client
        overflow hidden
        .img
            display inline-block
            margin-right 24px
        .arrow
            display inline-block
            margin-right 30px
            float right
</style>