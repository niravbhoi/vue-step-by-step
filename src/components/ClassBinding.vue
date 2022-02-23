<template>
    <h1>
       Class Binding 
    </h1>
    <h2 :class="applyClass">Change my color</h2>
    <button v-on:click="colorful=!colorful">Change</button>
</template>
<script>
export default {
    name : "ClassBinding",
    data(){
        return{
            colorful : false
        }
    },
    computed:{
        applyClass(){
            return{
                green : this.colorful,
                error : !this.colorful,
                other : true
            }
        }
    }
}
</script>
<style scoped>
.green{
    background-color: green;
    widows: 200px;
    padding: 10px;
}
.error{
    background-color: red;
    widows: 200px;
    padding: 10px;
}
.other{
    font-size: 50px;
}
</style>