<template>
    <div class="introductionPage" v-for="fruit in fruits.filter((e) => e.name == id)" :key="fruit.id">
        <img :src="fruit.image" alt="cant load" class="image">
        <h1 class="Title">{{ fruit.name }} </h1>
        <div class="SummaryIntroduction" >
            <h1>{{ fruit.price }} تومان</h1>
            <h2 > قیمت قبل : <del style="color: rgb(253, 3, 3 ,0.5);" >{{ fruit.oldPrice }} تومان</del>  </h2>
            <h2 >قیمت جدید : <b style="color: rgba(13, 231, 1, 0.9);">{{ fruit.price }} تومان</b> </h2>
            <h3 style="color: rgb(98, 99, 100);">بدون مالیات بر ارزش افزوده : <b style="color: black;">هزینه ارسال</b></h3>
            <div class="Counter">
                <button @click="Icrease" class="BTNIncrease">+</button>
                <h2 >{{ counter }}</h2>
                <button @click="Dicrease" class="BTNIncrease">-</button>
            </div>
            <router-link to="/Cart/1">
                <button class="BTNBuy" >خرید</button>
            </router-link>
        </div>
    </div>
    <!-- <h1>this is for test</h1> -->

</template>

<script>
    export default {
        props : ['id','name'],
        data(){
            return{
                counter : 0,

                fruits : [
                    {name : 'پیاز' ,oldPrice : 20000, price :15000, image : '../images/onion.jpg', off:true, grouping:'میوه' , id:1},
                    {name : ' سیب زمینی' ,oldPrice : 25000, price :17000, image : '../images/potato.jpg',off:true,grouping:'میوه' , id:2},
                    {name : ' خیار' ,oldPrice : 18000, price :18000, image : '../images/cucumber.jpg',off:false,grouping:'میوه' , id:3},
                    {name : ' گوجه' ,oldPrice : 16000, price :12000, image : '../images/tomato.jpg',off:true,grouping:'میوه' , id:4},
                    {name : ' موز' ,oldPrice : 80000, price :68000, image : '../images/benana.jpg',off:true,grouping:'میوه' , id:5},
                    {name : ' کیوی' ,oldPrice : 45000, price :3000, image : '../images/kiwi.jpg',off:true,grouping:'میوه' , id:6},
                    {name : ' آناناس' ,oldPrice : 16000, price :12000, image : '../images/ananas.jpg',off:true,grouping:'fruit' , id:7},
                    {name : ' دوغ' ,oldPrice : 21000, price :19000, image : '../images/doogh.jpg',off:true,grouping:'نوشیدنی' , id:8},
                    {name : ' کوکاکولا' ,oldPrice : 25000, price :23000, image : '../images/cooca.jpg',off:false,grouping:'نوشیدنی' , id:9},
                    {name : ' انرژی زا' ,oldPrice : 45000, price :40000, image : '../images/energetic.jpg',off:true,grouping:'نوشیدنی' , id:10},
                    {name : ' فانتا' ,oldPrice : 24000, price :22000, image : '../images/fanta.jpg',off:true,grouping:'نوشیدنی' , id:11},
                    {name : ' اسپرایت' ,oldPrice : 22000, price :20000, image : '../images/Sprite.jpg',off:true,grouping:'نوشیدنی' , id:12},
                    {name : ' گلاب' ,oldPrice : 18000, price :15000, image : '../images/golab.jpg',off:false,grouping:'نوشیدنی' , id:13},
                    {name : ' پودر موسیر' ,oldPrice : 36000, price :36000, image : '../images/moosirPoodr.jpg',off:false,grouping:'ادویه' , id:14},
                    {name : ' زردچوبه' ,oldPrice : 29000, price :29000, image : '../images/zardChoobe.jpg',off:false,grouping:'ادویه' , id:15},
                    {name : ' پنیر پیتزا' ,oldPrice : 50000, price :50000, image : '../images/panirpitza.jpg',off:false,grouping:'پروتئین' , id:16},
                    {name : ' گوشت' ,oldPrice : 150000, price :150000, image : '../images/goosht.jpg',off:false,grouping:'پروتئین' , id:17},
                    {name : ' کالباس' ,oldPrice : 80000, price :10000, image : '../images/calbas.jpg',off:false,grouping:'پروتئین' , id:18},
                    {name : ' خیارشور' ,oldPrice : 14000, price :14000, image : '../images/khiarshoor.jpg',off:false,grouping:'کنسرو' , id:19},
                    {name : ' تن ماهی' ,oldPrice : 37000, price :37000, image : '../images/toneMahi.jpg',off:false,grouping:'کنسرو' , id:20},
                    {name : ' ترشی' ,oldPrice : 50000, price :50000, image : '../images/toroshi.jpg',off:false,grouping:'کنسرو' , id:21},
                ]
            }
        },
        methods : {
            // mainPage(){
            //     this.$emit('loadMainPage')
            // },

            Icrease(){
                this.counter++
            },

            Dicrease(){
                this.counter--
            }
        }
    }
</script>

<style scoped>
    .introductionPage{
        display: inline-flex;
        direction: rtl;
        position: absolute;
        margin: 1%;
        width: 98%;
    }

    .image{
        position: relative;
        top: 64px;
        right: 64px;
        width: 384px;
    }

    .Title{
        position: relative;
        top: 64px;
        right : 450px
    }

    .SummaryIntroduction{
        background-color: rgb(244, 245, 243);
        position: relative;
        width: 512px;
        top: 150px;
        right: 390px;
        padding: 0px 20px;
        border-radius:10px ;
    }

    .BTNBuy{
        border: none;
        width: 77%;
        height: 40px;
        background-color: rgb(6, 193, 6);
        border-radius: 5px;
    }

    .Counter{
        display: inline-flex;
        width: 20%;
        background-color: white;
        margin: 1%;
        border-radius: 5px;
    }

    .BTNIncrease{
        position: relative;
        width: 32px;
        height: 32px;
        margin: 5px;
        border: none;
        background-color: white;
    }

    .Counter h2 {
        margin: 5px;
    }

    

</style>