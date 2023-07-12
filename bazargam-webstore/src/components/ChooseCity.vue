<template>
    <div v-if="isVisible" class="modal">
        <div class="modal-bg" @click="bgClick"></div>
        <div class="modal-container">
            <img class="backdrop-img" src="../images/IRAN_SKYLINE.png" alt="iran_skyline">

            <div class="modal-title">
                <slot name="title"></slot>
            </div>

            <div class="modal-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{isVisible: boolean}>(), {
  isVisible: false
})

const emit = defineEmits<{
    (e: "update:isVisible", value: boolean): void,
}>();

const bgClick = () => {
    console.log("[Modal] bg click")
    emit('update:isVisible', false);
}

</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-bg {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: 1;
}

.modal-container {
    z-index: 10;
    display: flex;
    flex-direction: column;
    background-color: white;
    max-width: 1500px;
    width: 80%;
    border: none;
    border-radius: 10px;
    min-height: 400px;
    max-height: 720px;
    position: relative;
}

.modal-title {
    text-align: center;
    color: #4f4f4f;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.backdrop-img {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: inherit;
    z-index: -1;
}

.modal-content {
    padding: 0 30px;
    margin: 0;
    overflow: scroll;
}
</style>
