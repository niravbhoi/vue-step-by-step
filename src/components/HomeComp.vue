<template>
    <h1>My Email : {{email}}</h1>
    <h1>My Mobile : {{mobile}}</h1>
    <h1>My Address : {{getAddress()}}</h1>
    <h1>My Country : {{setCountry('India')}}</h1>
    <h1>My pincode : {{ pincode = 383001 }}</h1>
    <h1>My pincode is 383001: {{ pincode == 383001 }}</h1>
    <h1>My pincode is himatnagar: {{ city == 'himatnagar' }}</h1>

    <h1>Data from method:</h1>
    <h1>Name : {{ getName() }}</h1>
    <h1>Email : {{ getData().email }}</h1>
    <h1>Mobile : {{ getData().mobile }}</h1>
</template>
<script>
export default {
    name:'HomeComp',
    data(){
        return{
            email : 'nirav@mail.com',
            mobile : 9876543210,
            city: 'himatnagar',
            getAddress:function(){
                return this.city+',Gujarat'
            },
            setCountry : function(country){
                return country
            }
        }
    },
    methods:{
        getName(){
            return "nirav";
        },
        getData(){
            return {
                email : "nirav9999@mail.com",
                mobile : "989898988"
            }
        }
    }
}
</script>
<style scoped>
    h1{
        color: orange;
    }
</style>