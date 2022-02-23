<template>
    <button v-on:click="getUserName(userName)">Get name</button>
</template>
<script>
export default {
    name : "UserDetail",
    data(){
        return{
            userName : "Nirav"
        }
    },
    props:{
        getUserName: Function
    }
}
</script>