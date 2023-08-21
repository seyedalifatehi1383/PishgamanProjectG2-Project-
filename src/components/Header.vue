<!-- <template >
    <div class="backgroand">
        <div><router-link to="/buy" class="n">درخواست خرید اقساطی</router-link></div>
        <div><router-link to="/aplication" class="a">دریافت لینک اپلیکیشن</router-link></div>
        <div><router-link to="/blog" class="a">بلاگ</router-link></div>
        <div><router-link to="/news" class="a">اخبار</router-link></div>
        <div class="dropdown">
        <button class="dropbtn">راهنما و خدمات</button>
        <div class="dropdown-content">
            <router-link to="/new">محصولات جدید</router-link>
            <router-link to="/new">فهرست تولید کننده</router-link>
            <router-link to="/new">آخرین محصولات مشاهده شده</router-link>
            <router-link to="/new">درباره ما</router-link>
            <router-link to="/new">زرگام چیست؟</router-link>
            <router-link to="/new">پرسش و پاسخ های متداول</router-link>
            <router-link to="/new">حریم خصوصی مقررات</router-link>
        </div>
    </div>
    <div class="dropdown">
        <button style="margin: 0px 350px;">انتخاب شهر</button>
    </div>
    </div>

    
</template>

<script lang="ts">

export default {
}
</script>

<style>
.n{
    /* background-color: rgb(169, 135, 223);
    padding: 20px;
    text-decoration: none;
    border: 20px; */
    color: rgb(167, 15, 15);
    text-decoration: none;
    margin:  20px;

}
.a{
    /* background-color: rgb(169, 135, 223);
    padding: 20px;
    text-decoration: none;
    border: 20px; */
    color: black;
    text-decoration: none;
    margin:  20px;

}
.a:hover{
    color: rgb(243, 9, 9);
    /* transition: 0.5s; */
}

.backgroand{
    background-image: url('../../public/im.jpeg');
    height: 450px;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
}



/* --------------------- */
/* Dropdown Button */
.dropbtn {
  background-color: #eeefe8;
  color: rgb(7, 7, 7);
  padding: 1px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  height: fit-content;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f8f8f8;
  min-width: 16px;
  box-shadow: 0px 8px 16px 0px rgba(245, 4, 4, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ed0606;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #fc3535;}
</style> -->
<template>
  <div class="background">
    
    <!-- <div> <router-link to="/city" class="a">شهر </router-link></div> -->
    <div class="row-1">
      <!-- <div class="dropdown"> -->
      <!-- <button class="dropbtn" style="margin: 0px 5px">انتخاب شهر</button>

      <div class="dropdown-content">
        <router-link to="/new">تهران</router-link>

        <router-link to="/new">کرمان</router-link>

        <router-link to="/new">شیراز</router-link>

        <router-link to="/new">کرمانشاه</router-link>

        <router-link to="/new">گرگان</router-link>

        <router-link to="/new">رشت</router-link>

        <router-link to="/new">بجنورد</router-link>

        <router-link to="/new">کاشان</router-link>

        <router-link to="/new">قزوین</router-link>

        <router-link to="/new">همدان</router-link>

        <router-link to="/new">بوشهر</router-link>

        <router-link to="/new">گلبهار-چناران</router-link>

        <router-link to="/new">ملک آباد-بینالود</router-link>

        <router-link to="/new">یزد</router-link>

        <router-link to="/new">کرج</router-link>

        <router-link to="/new">ارومیه</router-link>

        <router-link to="/new">تبریز</router-link>

        <router-link to="/new">قم</router-link>

        <router-link to="/new">زاهدان</router-link>

        <router-link to="/new">یاسوج</router-link>

        <router-link to="/new">لواسان</router-link>

        <router-link to="/new">اراک</router-link>

        <router-link to="/new">ساری</router-link>

        <router-link to="/new">بیرجند</router-link>

        <router-link to="/new">گچساران</router-link>

        <router-link to="/new">طرقبه-شاندیز</router-link>

        <router-link to="/new">اصفهان</router-link>

        <router-link to="/new">مشهد</router-link>

        <router-link to="/new">اهواز</router-link>

        <router-link to="/new">سنندج</router-link>

        <router-link to="/new">بندرعباس</router-link>

        <router-link to="/new">سمنان</router-link>

        <router-link to="/new">شهرکرد</router-link>

        <router-link to="/new">ایلام</router-link>

        <router-link to="/new">اردبیل</router-link>

        <router-link to="/new">زنجان</router-link>

        <router-link to="/new">خرم آباد</router-link>

        <router-link to="/new">دهدشت</router-link>
 
        <router-link to="/new">فریمان</router-link>
      </div> -->
    <!-- </div> -->

    <div style="margin-left: 200px ">
      
      <router-link to="/call" class="a" >تماس  با ما ۲۴۱۸-۰۲۱ و۹۱۰۹۲۰۸۰-۰۲۱ </router-link>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
    </div>
    <div class="dropdown">
      <button class="dropbtn" style="background-color: rgb(40, 44, 48 ,0); font-size: medium;" >راهنما و خدمات</button>
      <div class="dropdown-content">
        <router-link to="/list" class="a">فهرست تولید کننده</router-link>
        <router-link to="/mahsolat" class="a">اخرین محصولات مشاهده شده</router-link>
        <router-link to="/zargam" class="a">زرگام چیست؟</router-link>
        <router-link to="/motadavel" class="a">پرسش وپاسخ های متداول</router-link>
        <router-link to="/harim" class="">حریم خصوصی مقررات</router-link>
      </div>
    </div>
    <div style="margin: 0px 15px;height: 100px"><router-link to="/news" class="a">اخبار</router-link></div>
    <div style="margin: 0px 15px"><router-link to="/blog" class="a"> بلاگ</router-link></div>
    <div style="margin: 0px 15px">
      <router-link to="/link" class="a"> دریافت لینک اپلیکیشن</router-link>
    </div>
    <div style="margin: 0px 15px">
      <router-link to="/buy" class="n"> درخواست خرید اقساطی</router-link>
    </div>
    <div style="margin: 0px 250px 0px 0px;">
      <router-link  to="/login"  class="a"> ورودبه حساب کاربری </router-link>
     
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
    </div>
   
    </div>
    


    <!-- <div class="search">
      <img style= "width: 350px;" src="../../public/yaz.png"  alt="">
      <input style="height: 30px; width: 850px; border-radius: 2++0px; border: 2px solid #000000;" type="search" name="" id="" placeholder="جستجو در فروشگاه">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>

    </div> -->
    <!-- /* scroll-behavior: none; */ -->
    <div class="search">
      <img style="width: 350px;" src="../../public/yaz.png" alt="">
      <input style="height: 30px; width: 850px;border-radius: 20px;border: 2px solid #000000;" type="search" name="" id="" placeholder="جستجو در فروشگاه" v-model="textSearch" @keyup="search(textSearch)"  >
      
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
  
    </div>


    
    <div class="all-product">
      
      <div style="margin: 0px 10px;" ><router-link to="/mahsolat"  class="a">کل محصولات</router-link></div>
      <div ><router-link to="/vizhe" class="a">تخفیفات ویژه</router-link></div>
      <div class="dropdown">
        <button class="dropbtn" style="background-color: rgba(134, 194, 66, 0); font-size: large;">کالای دیجیتال</button>
        <div class="dropdown-content">
          <router-link to="/phone" class="a">تلفن</router-link>
          <router-link to="/mobile" class="a">موبایل</router-link>
          <router-link to="/hedfon" class="a">هدفون</router-link>
          <router-link to="/clock" class="a">ساعت هوشمند</router-link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn" style="background-color: rgb(57, 70, 82 , 0); font-size: large;">اقلام غیر خوراکی</button>
        <div class="dropdown-content">
          <router-link to="/tahrir" class="a">لوازم تحریر</router-link>
          <router-link to="/behdashti" class="a">آرایشی وبهداشتی</router-link>
          <router-link to="/home" class="a">خانه و آشپزخانه</router-link>
          <router-link to="/shoyande" class="a">شوینده</router-link>
        </div>
      </div>
    
      <div class="dropdown">
        <button class="dropbtn" style="background-color: rgb(57, 70, 82 , 0); font-size: large;">نان</button>
        <div class="dropdown-content">
          <router-link to="/new" class="a">نان</router-link>
        </div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn" style="background-color: rgb(57, 70, 82 , 0); font-size: large;">محصولات تنظیم بازار</button>
        <div class="dropdown-content">
          <router-link to="/nan" style="background-color: rgb(57, 70, 82 , 0);" class="a">اقلام تنظیم بازار</router-link>
          
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn" style="background-color: rgb(57, 70, 82 ,0); font-size: large;">اقلام خوراکی</button>
    <div class="dropdown-content">
          <router-link to="/porotoin" class="a">پروتئین</router-link>
          <router-link to="/noshidani" class="a">نوشیدنی</router-link> 
          <router-link to="/labaniyat" class="a">لبنیات</router-link>
          <router-link to="/tanagholat" class="a">تنقلات</router-link>
          <router-link to="/kharbar" class="a">خواربار</router-link>
          <router-link to="/konserv" class="a">کنسرو  و غذای آماده</router-link>
          <router-link to="/adveye" class="a">چاشنی و ادویه</router-link>
          <router-link to="/damnosh" class="a">چای و دمنوش</router-link>
          <router-link to="/deser" class="a">دسر شکلات و شیرینی جات </router-link>
        </div>
      </div>




    </div>
  </div>
  <div class="flex" v-for="x in searchProduct" :key="x.id">
    <img style="width: 70px; height: 70px;" :src="x.src" alt="" >
  <h3 style="margin: 30px;"  v-if="textSearch">{{ x.title }}</h3>
  <h3 style="margin: 30px;"  v-if="textSearch">{{ x.weight }}</h3>
  <h3  style="margin: 30px;" v-if="textSearch">{{ x.price }}</h3>
 
  </div>
</template>

<script setup lang="ts">
// import type { log } from "console";
import { type Ref, ref, h } from "vue";
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();
let textSearch = ref('');



let searchProduct: Ref<{
    id: number;
    title: string;
    weight: string;
    src: string;
    price: string;
}[]>


// export default {}
function search(text : string)  {
  // console.log(ProductsStore.products.filter( (p:any) => p.title.includes(textSearch)));
    searchProduct =  ProductsStore.products.filter( (p:any) => p.title.includes(text) );
  
  

}
</script>
<style>
.s{
  color: black;
  text-decoration: none;
  /* margin: 10px 20px 10px 20px; */
  font-size: 15px;
  height: fit-content;
}
.n{
    color: rgb(250, 2, 2);
    text-decoration: none;
    /* font-size: 15px; */
    font-size: large;
    margin:  2px;

}
.a {
  /* background-color: rgb(215, 189, 239); */
  /* padding: 50px; * 
  /* text-decoration: none; */
  /* border-radius:20px ; */
  
  /* align-items: center;
  align-content: center; */
  color: black;
  text-decoration: none;
  /* margin: 10px 20px 10px 20px; */
  font-size:large;
  height: fit-content;
  
}
.h{
  color: black;
  text-decoration: none;
  /* margin: 10px 20px 10px 20px; */
  font-size:larger;
  height: fit-content;
  
}
.a:hover {
  color: red;
  transition: 0.16s;
}
.s:hover {
  color: red;
  transition: 0.16s;
}
/* Dropdown Button */
.dropbtn {
  /* background-color: #b88bbe; */
  color: rgb(10, 2, 2);
  padding: 5px;
  font-size: small;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  height: fit-content;
  margin: 0px 10px;
  width: fit-content;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f4f1f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.background {
  direction: rtl;
  background-image: url('../../public/rang.jpg');
  
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 50px;
}

.search{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 30px;
}


.row-1{
  display: flex;
  justify-content: center;
  
}


/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ffffff;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #efe6ec;
}

.x {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.all-product {
  display: flex;
  font-size: small;
  justify-content: center;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(243, 235, 243);
  border-radius: 10px;
  align-items: center;
  padding: 5px 0;
}
.flex{
  display: flex;
 justify-content: right;
 direction: rtl;
}



</style>