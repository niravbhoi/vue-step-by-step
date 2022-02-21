<template>
<HelloWorld msg="Hello World" />
<HelloWorld msg="My name is nirav" />
<HomeComp />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeComp from './components/HomeComp.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        HomeComp,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
