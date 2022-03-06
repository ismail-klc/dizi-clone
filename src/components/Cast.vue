<template>
  <div class="w-full md:ml-6 lg:ml-0">
    <h4 class="mt-4 mb-4 text-sm text-white uppercase lg:mt-4 md:mt-0">Öne çıkan oyuncular</h4>
    <div>
      <router-link
        :to="{
          name: 'Oyuncu',
          params: {
            slug: toLower(item.person?.name),
          },
        }"
        v-for="(item, index) in cast"
        :key="index"
        class="flex items-center p-4 space-x-4 border border-[#1e2029]"
      >
        <img :src="item.person?.image?.medium" class="object-cover w-10 h-10 bg-black rounded-full" alt="cast" />
        <div class="flex flex-col">
          <span class="text-xs text-white">{{ item.person?.name }}</span>
          <span class="text-xs text-gray-500">{{ item.character?.name }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import toLower from '../utils/toLower'
defineProps({
  cast: Array,
});
</script>