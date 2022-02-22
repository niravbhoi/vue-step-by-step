<template>
    <h1>
       Checkbox & Radio 
    </h1>
    <h3>Techs</h3>
    <label for="java">Java</label>
    <input type="checkbox" v-model="techs" value="java" id="java">
    <label for="php">Php</label>
    <input type="checkbox" v-model="techs" value="php" id="php">
    <label for="node">Node</label>
    <input type="checkbox" v-model="techs" value="node" id="node">
    <h3>Selected Techs : {{ techs }}</h3>
    <br><br>
    <h3>Who I am </h3>
    <label for="student">Student</label>
    <input type="radio" value="student" v-model="who" name="who" id="student">
    <label for="developer">Developer</label>
    <input type="radio" value="developer" v-model="who" name="who" id="developer">
    <h3>Selected Who : {{ who }}</h3>
</template>
<script>
export default {
    name : 'CheckboxRadio',
    data(){
        return {
            techs : [],
            who : 'student',
        }
    }
}
</script>