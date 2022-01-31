<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="bg-[#1e212b] min-h-screen xl:pt-24">
    <div class="bg-[#14161d] w-full xl:w-[1000px] mx-auto xl:rounded-lg">
      <Navbar />
      <router-view class="p-2 md:p-8"></router-view>
    </div>
  </div>
</template>

<style>
</style>
