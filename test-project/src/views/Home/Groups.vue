<template>
    <div class="groups-container" v-for="group in groups">
        <img :src="group.src" alt="{{ group.name }}">
        <span> {{ group.name }} </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            groups: [],
        }
    },

    mounted() {
        fetch('http://localhost:3000/groups')
          .then(res => res.json())
          .then(data => this.groups = data)
          .catch(err => console.log(err.message))
    }
    
}
</script>

<style>
.groups-container {
    display: flex;
}
</style>