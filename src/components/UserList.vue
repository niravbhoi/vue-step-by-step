<template>
    <h1>    
        UserList
    </h1>   
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
        </tr>
        <tr v-for="user in users" :key="user.name">
            <UserdataList :userrow="user" :alertName="alertName"/>
        </tr>
    </table>
    
</template>

<script>
import UserdataList from './UserdataList.vue'
export default {
    name : "UserList",
    data (){
        return{
            users:[
                {
                    name : "nirav",
                    email : 'nirav@mail.com',
                    mobile : '9876543210'
                },
                {
                    name : "dam",
                    email : 'dam@mail.com',
                    mobile : '8876543210'
                },
                {
                    name : "janak",
                    email : 'janak@mail.com',
                    mobile : '7776543210'
                }
            ]
        }
    },
    components:{
        UserdataList
    },
    methods:{
        alertName(username){
            console.log(username);
        }
    }
}
</script>