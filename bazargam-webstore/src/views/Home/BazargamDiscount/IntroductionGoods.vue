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
                <button @click="Increase" class="BTNIncrease">+</button>
                <h2 >{{ counter }}</h2>
                <button @click="Decrease" class="BTNIncrease">-</button>
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

                fruits : []
            }
        },
        methods : {
            // mainPage(){
            //     this.$emit('loadMainPage')
            // },

            Increase(){
                this.counter++
            },

            Decrease(){
                this.counter--
            }
        },

        mounted() {
            fetch('http://localhost:3000/fruits/' + id)
                .then(res => res.json())
                .then(data => this.fruits = data)
                .catch(err => console.log(err.message))
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