<template>
    <td>{{ userrow.name }}</td>
    <td>{{ userrow.email }}</td>
    <td>{{ userrow.mobile }}</td>
    <td><button v-on:click="alertName(userrow.name)">Click me</button></td>
</template>

<script>
export default {
    name : "UserdataList",
    props : {
        userrow : Object,
        alertName : Function,
    },
    data (){
        return {
            
        }
    },
}
</script>