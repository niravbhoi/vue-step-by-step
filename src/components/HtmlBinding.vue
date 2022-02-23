<template>
    <div>{{ text }}</div>
    <div v-html="tag1"></div>
    <div v-html="tag2"></div>
</template>
<script>
export default {
    name : "HtmlBinding",
    data(){
        return{
            text : "Html Binding",
            tag1 : "<h1>This is tag 1.</h1>",
            tag2 : "<h1>This is tag 2.</h1>",
        }
    }
}
</script>