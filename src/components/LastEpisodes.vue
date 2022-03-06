<template>
  <div class="mt-10">
    <!-- header -->
    <div class="flex border-b border-[#1e2029] pb-4 justify-between overflow-x-auto">
      <h2 class="mr-4 text-xl text-white shrink-0">Gelecek Bölümler</h2>
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
    <div v-if="lastEpisodes" class="grid grid-cols-1 px-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3">
      <router-link
        :to="{
          name: 'Episode',
          params: {
            slug:
              toLower(item?.show?.name) +
              '-' +
              item?.show.id,
            seasonId: item?.season,
            bolumId: item?.number || 0
          },
        }"
        v-for="item in lastEpisodes"
        :key="item.id"
        class="bg-[#1e2029] flex p-2 relative hover:bg-[#353741] transition-all rounded-sm"
      >
        <img class="object-cover w-11 h-11 shrink-0" :src="item.show?.image?.medium" alt="" />
        <div class="flex flex-col justify-center min-w-0 mx-4">
          <span class="text-xs font-semibold text-white truncate">{{ item.show.name }}</span>
          <span class="text-xs font-semibold text-gray-400">{{ item.season }}. Sezon {{ item.number }}. Bölüm</span>
        </div>
        <div class="absolute text-xs font-semibold rounded-lg bg-[#14151d] py-0.5 px-1 text-gray-400 -top-2 -right-2">
          {{ date(item.airstamp) }}
        </div>
      </router-link>
    </div>
    <!-- episodes end -->

    <button class="w-full bg-[#1e2029] mt-6 text-gray-400 rounded-md py-3">Daha Fazla Göster</button>
  </div>
</template>

<script setup>
import PhMonitorPlayFill from "./Icons/PhMonitorPlayFill.vue";
import TwemojiFlagForFlagTurkey from "./Icons/TwemojiFlagForFlagTurkey.vue";
import { computed } from "@vue/runtime-core";
import { DateTime } from "luxon";
import toLower from '../utils/toLower'

defineProps({
  lastEpisodes: Array,
});

const date = (airstamp) => DateTime.fromISO(airstamp).toLocaleString({ month: "long", day: "numeric" });
</script>