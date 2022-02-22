<template>
    <h1>Two way binding</h1>
    <input type="text" v-model="count">
    <h2>{{ count }}</h2>
</template>
<script>
export default {
    name : 'TwoWay',
    data(){
        return {
            count : 0
        }
    }
}
</script>