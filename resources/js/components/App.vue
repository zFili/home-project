<script setup>
import {ref} from 'vue';
import axios from 'axios';


const props = defineProps({
    user: Object
});

const input = ref("");
const result = ref({});

async function search() {
    const key = "47bd631d";
    const url = `http://www.omdbapi.com/?apikey=${key}&t=${input.value}`;
    try {
        const response = await axios.get(url);
        if(response.status === 200) {
            result.value = Object.entries(response.data);
            console.log(response);
        } else {
                console.error(response);
        }  
    }
    catch (e) {
        console.error(e);
    }
}

function inputChanged(e) {
  input.value = e.target.value;
}


</script>

<template>
    <h1>
        hello, {{ user.name }}
    </h1>
    <input type="text" placeholder="Title" id="title" @change="inputChanged"/>
    <button @click="search">search</button>
    <div>
        <li v-for="(key, value) in result" :key="key" :value="value">
            {{ key }} : {{ value }}
        </li>
    </div>
    
</template>

<style scoped>
    input, select, textarea{
    color: black;
}
</style>
