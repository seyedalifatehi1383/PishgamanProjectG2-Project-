<template>
  <div class="discount-container">
    <div class="products-discount-title">
      <h3>تخفیف های ویژه بازرگام</h3>
    </div>

    <div v-for="discount in state.discountProducts" class="products-discount">
        <img :src="discount.src" :alt="discount.title" />
        
        <caption class="price-product">
          <p>قیمت: {{ discount.price }} تومان</p>
          <button @click="">خرید کالا</button>
        </caption>
    </div>

    <!-- <div v-for="discount in state.discountProducts" class="products-discount">
        <div class="lettuce-product">
          <img :src="discount.src" :alt="discount.title" />
          <caption class="price-product">
            <p>قیمت: {{ discount.price }} تومان</p>
            <button @click="">خرید کالا</button>
          </caption>
        </div>

      <div class="tomato-product">
        <img src="../../../images/t.jpeg" alt="tomato product" />
        <caption class="price-product">
          <p>قیمت: {{ discount.price }} تومان</p>
          <button>خرید کالا</button>
        </caption>
      </div>

      <div class="rice-product">
        <img src="../../../images/b.jpeg" alt="rice product" />
        <caption class="price-product">
          <p>قیمت: {{ discount.price }} تومان</p>
          <button>خرید کالا</button>
        </caption>
      </div>

      <div class="onion-product">
        <img src="../../../images/p.jpeg" alt="onion product" />
        <caption class="price-product">
          <p>قیمت: {{ discount.price }} تومان</p>
          <button>خرید کالا</button>
        </caption>
      </div>

      <div class="bread-product">
        <img src="../../../images/n.jpeg" alt="bread product" />
        <caption class="price-product">
          <p>قیمت: ۵۰۰۰ تومان</p>
          <button>خرید کالا</button>
        </caption>
      </div>
    </div> -->

  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";

type Discount = {
    id: number,
    title: string,
    src: string,
    price: number
}

const state = reactive<{
  discountProducts?: Discount[];
}>({});

onMounted(() => {
  fetch("http://localhost:3000/discountProducts")
    .then((res) => res.json())
    .then((data) => (state.discountProducts = data))
    .catch((err) => console.log(err.message));
});
</script>

<style scoped>
.discount-container {
  min-height: 500px;
  background-color: rgb(28, 138, 28);
  margin: auto 50px;
  border-radius: 10px;
  display: flex;
  /* grid-template-columns: repeat(10, 30px [col-start]); */
}

/* .products-discount div {
  width: 50px;
  height: 50px;
} */

.products-discount-title {
  display: inline-block;
}

.products-discount-title h3 {
  font-size: 30px;
  width: 200px;
}

.price-product p {
  width: 100px;
}
</style>
