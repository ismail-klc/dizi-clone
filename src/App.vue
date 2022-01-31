<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-[#1e212b] min-h-screen xl:pt-24 xl:pb-16">
    <div class="bg-[#14161d] w-full xl:w-[1000px] mx-auto xl:rounded-lg">
      <Navbar />
      <router-view class="p-4 md:p-8"></router-view>
      <Footer />
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  height: 6px;
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #14161d;
}

::-webkit-scrollbar-thumb {
  background: #000;
}

::-webkit-scrollbar-thumb:hover {
  background: #111;
}
</style>
