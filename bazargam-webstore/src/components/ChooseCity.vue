<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="chooseCityModal">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
// const nameFunc = (var: inputType): returnType => {...}

const closeModal = () => {
    
}


</script>

<style>
.chooseCityModal {
    width: 400px;
    margin: 100px auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}


</style>