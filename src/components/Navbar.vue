<template>
  <div class="h-[75px] relative flex items-center border-b border-[#1e2029] text-white pl-4 sm:pl-8">
    <button @click="toggle" class="md:hidden"><MdiMenu /></button>
    <router-link :to="{ name: 'Home' }">
      <img src="../assets/logo.png" class="h-8 ml-3 sm:ml-10 md:ml-6" />
    </router-link>

    <NavSearch :nav_class="'flex-1 hidden ml-12 space-x-6 md:flex'"/>
  </div>

  <div :class="style" class="absolute md:hidden z-50 border-b text-white border-[#1e2029] overflow-hidden transition-all bg-[#14161d]">
    <ul class="flex flex-col items-center justify-center py-4 space-y-4">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="{ name: link.link }"> {{ link.name }} </router-link>
      </li>
    </ul>
  </div>

  <!-- headbar -->
  <div class="hidden md:block border-b border-[#1e2029] py-4 px-9">
    <ul class="flex space-x-6">
      <li v-for="(link, index) in links" :key="index" class="text-white">
        <router-link active-class="pb-1.5 border-b-2 border-green-800" :to="{ name: link.link }"> {{ link.name }} </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";
import MdiMenu from "./Icons/MdiMenu.vue";
import NavSearch from "./NavSearch.vue";

const isOpened = ref(false);
const style = computed(() => (isOpened.value === true ? "w-full" : "w-0"));

const toggle = () => (isOpened.value = !isOpened.value);

const links = [
  { name: "Anasayfa", link: "Home" },
  { name: "Keşfet", link: "Keşfet" },
  { name: "Dizi", link: "Dizi" },
  { name: "Trend", link: "Trend" },
  { name: "Oyuncular", link: "Oyuncular" },
  { name: "Dizi Kanalları", link: "Kanallar" },
];
</script>