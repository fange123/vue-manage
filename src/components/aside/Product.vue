<template>
    <div class="product" @click="product">
        <span class="img"><img :src="img1" alt=""></span>
        客户产品
        <span class="arrow"><img :src="img2" alt=""></span>
    </div>
</template>

<script>
    import img1 from '../../assets/img/icon04.png'
    import img2 from '../../assets/img/back.png'
    import img3 from '../../assets/img/sanjiao.png'
    import img4 from '../../assets/img/icon04-on.png'
    export default {
        name: "Product",
        data() {
            return {
                img1:img1,
                img2:img2,
                img3:img3,
                img4:img4,
                img01:"",
                img02:"",
                show1:true,
                show2:true
            }
        },
        methods: {
            product() {
                if(this.show1 == true){
                    this.img01 = this.img1;
                    this.img1 = this.img4;
                }
                if(this.show1 == false){
                    this.img1 = this.img01;
                    this.img01 = ""
                }
                if(this.show2 == true){
                    this.img02 = this.img2;
                    this.img2 = this.img3;
                }
                if(this.show2 == false){
                    this.img2 = this.img02;
                    this.img02 = ""
                }
                this.show1 = !this.show1;
                this.show2 = !this.show2;
                this.$emit("productBtn");
            }

        },


    }
</script>

<style scoped lang="stylus">
    .product
        overflow hidden
        .img
            display inline-block
            margin-right 24px
        .arrow
            display inline-block
            margin-right 30px
            float right

</style>