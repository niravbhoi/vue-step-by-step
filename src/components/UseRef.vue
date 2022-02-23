<template>
    <h1>Use Ref</h1>
    <label for="">Name : </label>
    <input type="text" ref="name"><br/>
    <label for="">Email : </label>
    <input type="text" ref="email"><br/>
    <button v-on:click="getData()">Click me</button>
</template>
<script>
export default {
    name : "UseRef",
    data(){
        return{
            
        }
    },
    methods:{
        getData(){
            let name = this.$refs.name.value
            let email = this.$refs.email.value
            console.log(name);
            if(!name){
                this.$refs.name.focus();
                this.$refs.name.style.color = "red";
            }else if(!email){
                this.$refs.email.focus();
                this.$refs.email.style.color = "red";
            }else{
                this.$refs.name.style.color = "green";
                this.$refs.email.style.color = "green";
            }
            
        }
    }
}
</script>