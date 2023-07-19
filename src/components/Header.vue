<template>
  <header > 
  <div id="menu">
    <div id="call">
      <a id="city" @click="choseCity=!choseCity"> 
        <img src="../assets/icon1.png" width="15px" height="15px">
        تهران
      </a> 
      <router-link to="/Call" id="callNum">
         <img src="../assets/icon2.png" width="15px" height="15px">
         تماس با ما  2418-021 و 91092080-021 
      </router-link>
    </div>
    <div >
      <router-link to="/"  class="links">
        <img src="../assets/icon1.png" width="15px" height="15px" >
        Home
      </router-link>
      <router-link to="/news" class="links">
        اخبار
      </router-link>
      <router-link to="/blog" class="links">
        بلاگ
      </router-link>
      <router-link to="/link" class="links">
        دریافت لینک اپلکیشن
      </router-link>
      <router-link to="/buy" class="links"  id="buy">
        درخواست خرید اقساطی
      </router-link>
      <router-link to="" id="singIn" class="links">
        <img src="../assets/icon3.png" alt="" width="30px" height="30px">
      </router-link>
    </div>
  </div>
  <br>
  <p class="panel" >
    <router-link :to="{path: '/filter',query:{s1:stringOne}}">خوراکی</router-link>
    <router-link :to="{path: '/filter',query:{s1:stringTwo}}"> سبزیجات</router-link>
    <router-link :to="{path: '/filter',query:{s1:stringThree}}"> غیر خوراکی</router-link>
  </p>
</header>
</template>

<script>
export default{
  data(){
    return{
      stringOne:"خوراکی",
      stringTwo:"سبزیجات",
      stringThree:"غیر خوراکی"


    }
  }
}
</script>

<style  scoped>
header {
  background-image: url( '/home/elmira/Documents/bazargam/bazargam/bazargam/src/assets/header.jpeg') ;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
}
#city{
  background-color: aliceblue;
  width: 100px;
  height: 40px;
  float:right;
  text-align: center;
 border-radius: 15px;
 margin: 30px;
 padding-top:10px;
}
#callNum{
  color: #000;
  float:right;
  margin: 30px;
 text-decoration: none;
}
#callNum:hover{
  color: red;
}
.links{
  color: #000;
  float:right;
  margin: 28px;
 text-decoration: none;
}
.links:hover{
  color: red;
}
#buy{
  color: red;
}
#singIn{
  width: 40px;
  height: 40px;
  background-color: aliceblue;
  border-radius: 8px;
}
.shrch{
  display: block;

}
.panel{
  width: 800px;
  height: 30px;
  background-color: white;
  margin-top: 100px;
  margin-left: 200px;
  border-radius: 20px;
  padding: 15px;
}

.panel a{
 text-decoration: none;
 color: #000;
 margin: 20px;
} 
.panel a:hover{
  background-color: rgb(19, 199, 64);
  padding-top: 15px;
  padding-bottom: 29px;
} 

</style>
