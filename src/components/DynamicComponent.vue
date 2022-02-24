<template>
    <h1>
       Dynamic Component 
    </h1>
    <button @click="activePage='JavaComp'">Load Java</button>
    <button @click="activePage='PhpComp'">Load Php</button>
    <button @click="activePage='LoadComp'">Load Node</button>
    <component :is="activePage"></component>
</template>
<script>
import PhpComp from './PhpComp.vue'
import JavaComp from './JavaComp.vue'
import NodeComp from './NodeComp.vue'
export default {
    name:'DynamicComponent',
    data(){
        return{
            activePage : ''
        }
    },
    components:{
        PhpComp,
        JavaComp,
        NodeComp
    }
}
</script>