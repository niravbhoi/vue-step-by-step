<template>
    <header>
        <slot name="header"></slot>
    </header>
    <content>
        <slot name="main"></slot>
    </content>
    <footer>
        <slot name="footer">
            <button type="button">Click me</button>
        </slot>
    </footer>
</template>
<script>
export default {
    name:"SlotChild",
    data(){
        return{}
    }
}
</script>