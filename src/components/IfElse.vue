<template>
    <h1>
       If else condition 
    </h1>
    <h2 v-if='show'>IF statement</h2>
    <h2 v-else>Else statement</h2>
    <button v-on:click="show=!show">Toggle</button>
</template>
<script>
export default {
    name : "IfElse",
    data(){
        return{
            show : true
        }
    }
}
</script>