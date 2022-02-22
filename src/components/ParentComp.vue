<template>
    <ChildComp name="nirav" :userdata="user" :getData="getData"/>
</template>
<script>
import ChildComp from './ChildComp.vue'
export default {
    name : "ParentComp",
    data(){
        return {
            user:{
                name : 'Peter',
                email: 'peter@mail.com'
            }
        }
    },
    components:{
        ChildComp
    },
    methods: {
        getData(){
            console.warn("parent function called")
        }
    }
}
</script>