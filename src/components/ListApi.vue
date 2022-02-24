<template>
    <h1>
       List API 
    </h1>
    <table>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Image</th>
        </tr>
        <tr v-for="item in lists" :key="item">
            <td>{{ item.id }}</td>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
            <td><img :src='item.avatar' alt=""></td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios';
export default {
    name : 'ListApi',
    data(){
        return{
            lists : []
        }
    },
    async mounted(){
        let result = await axios.get('https://reqres.in/api/users?page=1');
        this.lists =result.data.data;
    }
}
</script>
<style>
    .img{
        height: 50px;
    }
</style>