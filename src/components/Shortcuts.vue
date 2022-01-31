<template>
  <div class="mt-10">
    <h2 class="text-xl text-white">Kısayollar</h2>
    <div class="flex mt-6 space-x-2 overflow-x-auto">
      <router-link v-for="i in 5" :key="i" class="shrink-0 text-white bg-[#1e2029] rounded-lg px-5 py-3" :to="{ name: 'Home' }"> Netflix Dizileri </router-link>
    </div>
  </div>
</template>