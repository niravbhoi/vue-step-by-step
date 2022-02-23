<template>
    <h1>Vuejs</h1>
    <!-- <HelloWorld msg="Hello World" /> -->
    <!-- <HelloWorld msg="My name is nirav" /> -->
    <!-- <HomeComp /> -->
    <!-- <TwoWay /> -->
    <!-- <GetInput /> -->
    <!-- <CheckboxRadio /> -->
    <!-- <IfElse /> -->
    <!-- <ForLoop /> -->
    <!-- <ParentComp/> -->
    <UserList />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeComp from './components/HomeComp.vue'
// import TwoWay from './components/TwoWay.vue'
// import GetInput from './components/GetInput.vue'
// import CheckboxRadio from './components/CheckboxRadio.vue'
// import IfElse from './components/IfElse.vue'
// import ForLoop from './components/ForLoop.vue'
// import ParentComp from './components/ParentComp.vue'
import UserList from './components/UserList.vue'

export default {
    name: 'App',
    data(){
        return {
        }
    },
    components: {
        // HelloWorld,
        // HomeComp,
        // TwoWay,
        // GetInput,
        // CheckboxRadio,
        // IfElse,
        // ForLoop,
        // ParentComp,
        UserList
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
