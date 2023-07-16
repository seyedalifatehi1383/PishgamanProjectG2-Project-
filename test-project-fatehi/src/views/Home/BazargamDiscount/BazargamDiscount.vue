<template>
    <div class="discount-container">
        <div class="products-discount-title">
            <h3> تخفیف های ویژه بازرگام </h3>
        </div>

        <div class="products-discount">
            <div class="lettuce-product">
                <img src="../../../images/K.jpeg" alt="lettuce product">
                <caption class="price-product">
                    <p> قیمت: ۵۰۰۰ تومان </p>
                    <button @click=""> خرید کالا </button>
                </caption>
            </div>

            <div class="tomato-product">
                <img src="../../../images/t.jpeg" alt="tomato product">
                <caption class="price-product">
                    <p> قیمت: ۵۰۰۰ تومان </p>
                    <button> خرید کالا </button>
                </caption>
            </div>

            <div class="rice-product">
                <img src="../../../images/b.jpeg" alt="rice product">
                <caption class="price-product">
                    <p> قیمت: ۵۰۰۰ تومان </p>
                    <button> خرید کالا </button>
                </caption>
            </div>

            <div class="onion-product">
                <img src="../../../images/p.jpeg" alt="onion product">
                <caption class="price-product">
                    <p> قیمت: ۵۰۰۰ تومان </p>
                    <button> خرید کالا </button>
                </caption>
            </div>

            <div class="bread-product">
                <img src="../../../images/n.jpeg" alt="bread product">
                <caption class="price-product">
                    <p> قیمت: ۵۰۰۰ تومان </p>
                    <button> خرید کالا </button>
                </caption>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    mounted() {
        fetch('http://localhost:5173/#/:id')
            .then(res => res.json())
            .then(data => this.discountProducts = data)
            .catch(err => console.log(err.message))
    }
</script>

<style scoped>
.discount-container {
    min-height: 500px;
    background-color: rgb(28, 138, 28);
    margin: auto 50px;
    border-radius: 10px;
    display: flex;
}

.products-discount {
    display: grid;
    grid-template-columns: repeat(10, 300px [col-start]);
    margin: 10px auto;
}

.products-discount div {
    width: 50px;
    height: 50px;
}

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