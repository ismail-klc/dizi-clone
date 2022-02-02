<template>
  <div :class="nav_class">
    <div class="relative flex items-center flex-1">
      <input
        v-model="searchText"
        placeholder="Dizi ara..."
        type="text"
        :class="results.length > 0 ? 'rounded-t-2xl' : 'rounded-full'"
        class="py-2 w-full pl-5 text-sm pr-14 outline-none text-white bg-[#1d2129]"
      />
      <button class="absolute right-4">
        <UilSearch />
      </button>

      <div v-if="results.length > 0" class="absolute z-50 w-full rounded-b-lg shadow-xl bg-[#1d2129] top-9 py-4 px-3">
        <router-link
          :to="{
            name: 'Detay',
            params: {
              slug: item.show.name
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, ''),
            },
          }"
          v-for="(item, index) in results"
          :key="index"
          class="w-full flex mt-1 items-center hover:bg-[#393b44] bg-[#2b2d36] p-2"
        >
          <img :src="item.show?.image?.medium" class="w-6 h-6" alt="image" />
          <span class="ml-2 text-xs">{{ item.show?.name }}</span>
        </router-link>
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import appAxios from "../utils/appAxios";
import UilSearch from "./Icons/UilSearch.vue";
defineProps({
  nav_class: String,
});

const searchText = ref("");
const results = ref([]);
const router = useRouter();

watch(
  () => router.currentRoute.value.params.slug,
  () => {
    searchText.value = "";
    results.value = [];
  }
);

watchEffect((onInvalidate) => {
  if (searchText.value.length > 0) {
    const typing = setTimeout(async () => {
      if (searchText.value.length > 3) {
        const text = searchText.value.split(" ").join("+");
        const res = await appAxios.get(`search/shows?q=${text}`);
        results.value = res.data.slice(0, 4);
      } else {
        results.value = [];
      }
    }, 1000);

    onInvalidate(() => clearTimeout(typing));
  }
});
</script>