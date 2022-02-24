<template>
<h1>
    Slot Parent
</h1>
<div class="col-md-4">
    <SlotChild>
        <template v-slot:header>
            <h1>
                This is title
            </h1>
        </template>
        <template v-slot:main>
            <img src="https://www.opingo.in/images/logo-white.png" />
        </template>
        <template v-slot:footer>
            <button type="button">Buy now</button>
        </template>
    </SlotChild>
</div>
<div class="col-md-4">
    <SlotChild>
        <template v-slot:header>
            <h1>
                opingo
            </h1>
        </template>
        <template v-slot:footer>
        </template>
        <template v-slot:main>
            <img src="https://www.opingo.in/images/logo-white.png" />
        </template>
    </SlotChild>
</div>
</template>

<script>
import SlotChild from './SlotChild.vue'
export default {
    name: "SlotParent",
    data() {
        return {}
    },
    components: {
        SlotChild
    }
}
</script>
<style>
.col-md-4{
    margin-left: 33%;
    width: 33%;
    border: 1px solid black;
    text-align: center;
}
</style>