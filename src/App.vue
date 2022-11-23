<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const name = ref('van-button')
</script>

<template>
  <header>
    <component :is="name">
    12333
    </component>
    <van-button>dede1</van-button>

  </header>


</template>


