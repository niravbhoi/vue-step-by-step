<template>
    <h1>
       For Loop 
    </h1>
    <ul>
        <li v-for="item in techlogies" :key="item">{{ item }}</li>
    </ul>
    <table border="1px solid">
        <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
        </tr>
        <tr v-for="user in users" :key="user.name">
            <td>{{ user.name }}</td>
            <td>{{ user.mobile }}</td>
            <td>{{ user.email }}</td>
        </tr>
    </table>
</template>
<script>
export default {
    name : "ForLoop",
    data(){
        return {
            techlogies : ['php', 'vuejs', 'node', 'laravel'],
            users : [
                {
                    name : "nirav",
                    mobile : "9876543210",
                    email : "nirav@mail.com",
                },
                {
                    name : "dam",
                    mobile : "9876543211",
                    email : "dam@mail.com",
                },
                {
                    name : "janak",
                    mobile : "9876543212",
                    email : "janak@mail.com",
                }
            ]
        }
    }
}
</script>
<style>
ul{
    text-align: left;
}
</style>