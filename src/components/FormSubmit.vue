<template>
    <h1>Form</h1>
    <ul>
        <li v-for="item in error" :key="item">
            {{ item }} is not valid
        </li>
    </ul>
    <form action="">
        <label for="">Email : </label>
        <input type="text" name="email" placeholder="Enter Email" v-model="form.email" />
        <br /><br />
        <label for="">Password : </label>
        <input type="password" name="password" placeholder="Enter Password" v-model="form.password" />
        <br /><br />
        <button v-on:click="addUser" type="button">Submit</button>
    </form>
</template>
<script>
import axios from 'axios';
export default {
    name : "SimpleForm",
    data(){
        return{
            form:{
                email:'',
                password:'',
            },
            error:[],
        }
    },
    methods:{
        async addUser(){
            this.error = [];
            for(const field in this.form){
                if(this.form[field] === "" || this.form[field].length === 0){
                    this.error.push(field);
                }
            }
            if(this.error.length === 0){
                let result = axios.post('http://localhost:3000/posts', {
                    title: this.form.email,
                    author: this.form.password,
                })
                console.log(result);
            }
        }
    }
}
</script>