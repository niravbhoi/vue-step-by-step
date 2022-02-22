<template>
    <h1>Get Input value</h1>
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email">
    <br>
    <br>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
    <br>
    <br>
    <button v-on:click="getData()">Get Data</button>
</template>
<script>
export default {
    name : "GetInput",
    data() {
        return {
            email : null,
            password : null,
        }
    },
    methods:{
        getData(){
            console.log("data:", this.email, this.password);
        }
    }
}
</script>