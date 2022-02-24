<template>
    <h1>
       Slot Parent 
    </h1>
    <SlotChild><h1>Name : Nirav Bhoi</h1></SlotChild>
    <SlotChild><h1>Github : <a href="https://www.github.com" target="_blank" >@nirav</a></h1></SlotChild>
    <SlotChild><h1>Image <img src="https://www.opingo.in/images/logo-white.png" /> </h1></SlotChild>
    <SlotChild></SlotChild>
</template>
<script>
import SlotChild from './SlotChild.vue'
export default {
    name:"SlotParent",
    data(){
        return{}
    },
    components:{
        SlotChild
    }
}
</script>