<template>
  <header > 
  <!-- /*<button class="first">yazd</button>
  <a href="">call</a>
  <a href="">hlep</a>
  <a href="">news</a>
  <a href="">blogs</a>
  <button class="first">sing in</button>
  <br>
  <img src="../assets/0035797.png" >
  <input type="text" placeholder="srech">
  <div class="panel">
    <a>aaaaa</a>
    <a @mouseout="showlist()" @mouseover="showlist()">
      bbbbb
      <li v-show="show" >
        <ul>rrr</ul>
      </li>
    </a>
    <a>ccccc</a>
    <a>ddddd</a>
    <a>eeeee</a>
    <a>fffff</a>
    <a>ddddd</a>
  </div> -->
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
  </p>
</header>
</template>

<script>
export default{
  components:{
  },
  data(){
    return{
      choseCity:false,
      stringOne:"خوراکی",
      stringTwo:"سبزیجات",


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
 /*#city div{
  width: 20px;
  height: 20px;
  margin-top:  0px; 
  display: inline-block;
} */
/* header a,button{
margin: 10px  5px;
padding: 10px 20px;
text-decoration: none;
}
 .first:hover {
  color: #bb0c0c;
}
a:hover{
  color: #bb0c0c;
}
header img{
  width: 300px;
  height: 100px;
  float: right ;
  margin-right: 100px;
}
header input{
  margin-top: 40px;
  margin-right: 00px;
  margin-left: 300px;
  width: 500px;
  height: 20px;
  border-radius: 5px;
  border-color: rgb(29, 202, 29);
  
}*/
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
