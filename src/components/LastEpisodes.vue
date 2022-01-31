<template>
  <div class="mt-10">
    <!-- header -->
    <div class="flex border-b border-[#1e2029] pb-4 justify-between overflow-x-auto">
      <h2 class="mr-4 text-xl text-white shrink-0">Güncel Bölümler</h2>
      <div class="flex space-x-6 shrink-0">
        <button class="flex items-center space-x-2 text-white">
          <PhMonitorPlayFill />
          <span class="uppercase">Yabancı dizi</span>
        </button>

        <button class="flex items-center space-x-2 text-white">
          <TwemojiFlagForFlagTurkey />
          <span class="uppercase">Dublaj dizi</span>
        </button>
      </div>
    </div>
    <!-- header end -->

    <!-- episodes -->
    <div class="grid grid-cols-1 px-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3">
      <router-link :to="{ name: 'Detay', params: { slug: 'la-casa-de-papel' } }" v-for="i in 16" :key="i" 
        class="bg-[#1e2029] flex p-2 relative hover:bg-[#353741] transition-all rounded-sm">
        <img class="object-cover w-11 h-11 shrink-0" src="../assets/episode.avif" alt="" />
        <div class="flex flex-col justify-center min-w-0 mx-4">
          <span class="text-xs font-semibold text-white truncate">Secrets of Sulphur Springs</span>
          <span class="text-xs font-semibold text-gray-400">2. Sezon 8. Bölüm</span>
        </div>
        <div class="absolute text-xs font-semibold rounded-lg bg-[#14151d] py-0.5 px-1 text-gray-400 -top-2 -right-2">31 Ocak</div>
      </router-link>
    </div>
    <!-- episodes end -->

    <button class="w-full bg-[#1e2029] mt-6 text-gray-400 rounded-md py-3">Daha Fazla Göster</button>
  </div>
</template>

<script setup>
import PhMonitorPlayFill from "./Icons/PhMonitorPlayFill.vue";
import TwemojiFlagForFlagTurkey from "./Icons/TwemojiFlagForFlagTurkey.vue";
</script>