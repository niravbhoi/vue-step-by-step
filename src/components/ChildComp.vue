<template>
    <h1>
       Pass data parent to child 
    </h1>
    <h2>Name from p : {{ name }}</h2>
    <h2>Name from p : {{ userdata.name }}</h2>
    <button v-on:click="getData()">Call p function</button>
</template>
<script>
export default {
    name : "ChildComp",
    props:{
            name : String,
            userdata : Object,
            getData : Function
    },
    data(){
        return{
            
        }
    }
}
</script>