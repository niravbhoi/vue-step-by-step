<template>
<h1>{{ profile }}'s Detail </h1>
</template>

<script>
import {
    useRoute
} from 'vue-router'
export default {
    name: 'ProfileDetail',
    data(){
        return {
            profile : ''
        }
    },
    mounted() {
        const route=useRoute();
        this.profile = route.params.name;
    }
}
</script>
