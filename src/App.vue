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
    <!-- <UserList /> -->
    <!-- <HtmlBinding /> -->
    <!-- <ClassBinding /> -->
    <!-- <UserData /> -->
    <!-- <UseRef /> -->
    <!-- <SimpleForm /> -->
    <!-- <SlotParent /> -->
    <DynamicComponent />
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
// import UserList from './components/UserList.vue'
// import HtmlBinding from './components/HtmlBinding.vue'
// import ClassBinding from './components/ClassBinding.vue'
// import UserData from './components/UserData.vue'
// import UseRef from './components/UseRef.vue'
// import SimpleForm from './components/SimpleForm.vue'
// import SlotParent from './components/SlotParent.vue'
import DynamicComponent from './components/DynamicComponent.vue'

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
        // UserList,
        // HtmlBinding,
        // ClassBinding,
        // UserData,
        // UseRef,
        // SimpleForm,
        // SlotParent,
        DynamicComponent,
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
