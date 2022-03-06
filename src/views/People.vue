<template>
  <div>
    <div class="flex flex-col md:flex-row">
      <img :src="cast.image?.medium" alt="oyuncu-img" class="max-w-[156px] max-h-64" />
      <div class="flex flex-col justify-between flex-1 mt-4 md:mt-0 md:ml-4">
        <h1 class="text-xl text-white">{{ cast.name }}</h1>

        <!-- infos -->
        <div class="flex w-full mt-4 text-sm">
          <div v-for="(item, index) in infos" :key="index" class="flex flex-col flex-1 border p-4 overflow-x-auto border-[#1e2029] space-y-1">
            <span class="text-gray-500 uppercase">{{ item.name }}</span>
            <span class="text-white">{{ item.value }}</span>
          </div>
        </div>
        <!-- infos end -->
      </div>
    </div>

    <!-- oyunculuk -->
    <div class="mt-8">
      <h3 class="text-white uppercase">Oyunculuk</h3>
      <div class="flex flex-col mt-7" v-for="(show, index) in shows" :key="index">
        <router-link
          :to="{
            name: 'Detay',
            params: {
              slug: toLower(show._embedded.show.name) + '-' + show._embedded.show.id,
            },
          }"
          class="text-lg text-white truncate hover:text-zinc-300"
        >
          {{ show._embedded.show.name }}
          <span v-if="show._embedded.show.rating.average" class="p-1 bg-green-600 rounded-lg">{{ show._embedded.show.rating.average }}</span>
        </router-link>
        <p class="text-xs text-gray-400">{{ getGenres(show._embedded.show.genres) }}</p>

        <div class="flex flex-col mt-3 text-gray-300 sm:flex-row">
          <img :src="show._embedded.show.image?.medium" alt="" class="max-w-[200px]" />
          <div class="flex flex-col flex-1 mt-2 text-sm text-justify sm:mt-0 sm:ml-4" v-html="show._embedded.show.summary"></div>
        </div>
      </div>
    </div>
    <!-- oyunculuk end -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import appAxios from "../utils/appAxios";
import { DateTime } from "luxon";
import toLower from "../utils/toLower";

const cast = ref({});
const shows = ref([]);

const router = useRouter();
onMounted(async () => {
  const slug = router.currentRoute.value.params.slug.toString();
  let searchSlug = slug.split("-").join("+");

  let res = await appAxios.get(`search/people?q=${searchSlug}`);
  cast.value = res.data[0].person;

  res = await appAxios.get(`people/${cast.value.id}/castcredits?embed=show`);
  shows.value = res.data;
});

const getGenres = (genres) => {
  return genres.join(",");
};

const infos = computed(() => [
  { name: "Doğum Tarihi", value: DateTime.fromISO(cast.value.birthday).toLocaleString({ month: "long", day: "numeric", year: "numeric" }) },
  { name: "Doğum yeri", value: cast.value.country?.name },
  { name: "Oynadığı Dizi Sayısı", value: shows.value.length },
]);
</script>