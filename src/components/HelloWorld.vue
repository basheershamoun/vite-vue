<script setup lang="ts">
import { ref } from 'vue'
import {useAppStore} from '../store/appStore';


defineProps<{ msg: string }>()

const appStore = useAppStore();
const count = ref(0)
</script>

<template>
  <div class="shrink mx-auto max-w-md text-center">
  <h1>{{ msg }}</h1>

  


    <button class="border border-blue-900 text-blue-700 py-1  px-3 rounded mx-5" type="button" @click="count++">count is {{ count }}</button>

    <button class="border border-blue-900 text-blue-700 py-1  px-3 rounded mx-5"  type="button" @click="appStore.inc">persistent state count is {{ appStore.counter }}</button>
</div>






</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
