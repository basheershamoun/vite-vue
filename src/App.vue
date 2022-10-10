<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar.vue';
import {useAppStore} from './store/appStore';


const appStore = useAppStore();

appStore.setThemeClass();


</script>

<template>



  <div class="antialiased subpixel-antialiased">
  
  <Navbar></Navbar>
  <div class="container mx-auto">
  <RouterView></RouterView>
</div>
  </div>
</template>

<style >

.dark body {
  background-color: #1a202c;
  color: #fff;
}


</style>
