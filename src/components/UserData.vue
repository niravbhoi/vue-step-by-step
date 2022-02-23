<template>
    <h1>
       {{ childUser }} 
    </h1>
    <UserDetail :getUserName="getUserName" />
</template>
<script>
import UserDetail from './UserDetail.vue'
export default {
    name : "UserData",
    data(){
        return{
            childUser : ""
        }
    },
    components:{
        UserDetail
    },
    methods:{
        getUserName(name){
            this.childUser = name
        }
    }
}
</script>