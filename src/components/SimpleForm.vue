<template>
    <h1>Simple Form</h1>
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
        <label for="">Country : </label>
        <select name="country" v-model="form.country">
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="japan">Japan</option>
        </select>
        <br /><br />
        <label for="">Technologies : </label>
        <input type="checkbox" name="java" value="java" v-model="form.technologies">
        <label for="">Java</label>
        <input type="checkbox" name="php" value="php" v-model="form.technologies">
        <label for="">Php</label>
        <input type="checkbox" name="python" value="python" v-model="form.technologies">
        <label for="">Python</label>
        <br /><br />
        <label for="">Gender : </label>
        <input type="radio" name="male" value="male" v-model="form.gender">
        <label for="">Male</label>
        <input type="radio" name="female" value="female" v-model="form.gender">
        <label for="">Female</label>
        <br /><br />
        <button v-on:click="login" type="button">Submit</button>
    </form>
</template>
<script>
export default {
    name : "SimpleForm",
    data(){
        return{
            form:{
                email:'',
                password:'',
                country:'',
                technologies:[],
                gender:'',
            },
            error:[],
        }
    },
    methods:{
        login(){
            this.error = [];
            for(const field in this.form){
                if(this.form[field] === "" || this.form[field].length === 0){
                    this.error.push(field);
                }
            }
            console.log(this.form,this.error);
            if(this.error.length === 0){
                alert("Form submitted successfully");
            }
        }
    }
}
</script>