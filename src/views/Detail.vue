<template>
  <div>
    <div :class="show.status === 'Ended' ? 'bg-red-600' : 'bg-green-600'" class="inline-flex px-3 py-1 mb-2 text-white rounded-sm">
      {{ show.status === "Ended" ? "Final Yaptı" : "Devam Ediyor" }}
    </div>
    <div class="flex items-center justify-between">
      <h1 class="text-3xl text-white">
        {{ show.name }} <span class="text-gray-400">({{ show.premiered?.slice(0, 4) }})</span>
      </h1>
      <button class="text-white h-10 uppercase text-sm shrink-0 px-3 bg-[#1e2029]">Takip et</button>
    </div>

    <div class="inline-flex pb-3 mt-8 text-xs font-semibold text-green-600 uppercase border-b border-green-600">Genel bakış</div>

    <div class="flex flex-col mt-6 lg:flex-row lg:space-x-8">
      <div class="flex flex-col lg:w-[320px] shrink-0 md:flex-row lg:flex-col">
        <img class="object-cover max-h-[350px] md:max-h-[405px] w-full lg:max-h-fit md:w-auto" :src="show.image?.original" alt="asd" />

        <!-- cast -->
        <Cast :cast="cast" />
        <!-- cast end -->
      </div>

      <div class="flex flex-col flex-1 mt-4 text-xs lg:mt-0">
        <h2 class="text-white uppercase">Genel bakış</h2>
        <p class="mt-3 text-gray-600" v-html="show.summary"></p>

        <!-- infos -->
        <div class="flex w-full mt-4 overflow-x-auto">
          <div v-for="(item, index) in infos" :key="index" class="flex flex-col flex-1 border p-4 overflow-x-auto border-[#1e2029] space-y-1">
            <span class="text-gray-500 uppercase">{{ item.name }}</span>
            <span class="text-white">{{ item.value }}</span>
          </div>
        </div>
        <!-- infos end -->

        <!-- trailer -->
        <div class="flex mt-4 border border-[#1e2029] cursor-pointer hover:bg-[#21232b]">
          <img :src="show.image?.medium" alt="trailer-img" class="object-cover h-24 w-44" />
          <div class="flex flex-col justify-center flex-1 ml-4 text-white">
            <span class="text-xl">Fragman</span>
            <span class="text-base uppercase">Official Trailer</span>
            <span class="text-gray-400">Fragman</span>
          </div>
        </div>
        <!-- trailer end -->

        <div class="flex flex-col min-w-0 mt-4 space-y-2 text-white md:items-center md:flex-row md:justify-between">
          <h4 class="font-semibold uppercase">{{ show.name }} DİZİSİNİN TÜM SEZON VE BÖLÜMLERİ</h4>
          <Checkbox :key="0" :title="'Tümünü izlendi olarak işaretle'" />
        </div>

        <!-- episodes -->
        <div class="flex flex-col md:flex-row mt-4 border border-[#1e2029]">
          <div class="flex">
            <ul class="flex flex-row min-w-0 overflow-x-auto text-gray-600 md:flex-col">
              <li
                v-for="i in seasons.length"
                :key="i"
                :class="currentSeason === i && 'border-r-none border-l border-green-800'"
                @click="currentSeason = i"
                class="px-4 py-3 cursor-pointer uppercase border-r shrink-0 md:border-b border-[#1e2029]"
              >
                Sezon {{ i }}
              </li>
            </ul>
          </div>
          <div class="flex flex-1 border-l border-[#1e2029]">
            <ul class="w-full text-white">
              <li v-for="(item, index) in episodes.filter((x) => x.season === currentSeason)" :key="item.id" class="px-4 py-3 flex border-b border-[#1e2029]">
                <Checkbox :title="'Bölüm ' + parseInt(index + 1)" :key="item.id" />
                <router-link
                  :to="{
                    name: 'Episode',
                    params: {
                      slug: toLower(show.name) + '-' + show.id,
                      seasonId: currentSeason,
                      bolumId: parseInt(index + 1),
                    },
                  }"
                  class="flex-1 ml-6 font-semibold text-white truncate cursor-pointer hover:text-green-700"
                >
                  {{ item.name }}
                </router-link>
                <!-- date -->
                <span class="ml-3 text-gray-600">{{ item.airdate }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- episodes end -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Cast from "../components/Cast.vue";
import Checkbox from "../components/Checkbox.vue";
import appAxios from "../utils/appAxios";
import toLower from "../utils/toLower";

const show = ref({});
const cast = ref([]);
const seasons = ref([]);
const episodes = ref([]);
const currentSeason = ref(1);

const router = useRouter();
onMounted(async () => {
  getShow();
});

const getShow = async () => {
  const slugs = router.currentRoute.value.params.slug?.toString().split("-") || [];
  const id = slugs[slugs.length - 1];
  if (!id) {
    return;
  }

  let res = await appAxios.get(`shows/${id}`);
  show.value = res.data;

  res = await appAxios.get(`shows/${id}/cast`);
  cast.value = res.data.slice(0, 5);

  res = await appAxios.get(`shows/${id}/seasons`);
  seasons.value = res.data;

  res = await appAxios.get(`shows/${id}/episodes`);
  episodes.value = res.data;
};

watch(
  () => router.currentRoute.value.params.slug,
  () => {
    getShow();
  }
);

const infos = computed(() => [
  { name: "Ülke", value: show.value.network?.country.name },
  { name: "Süre", value: show.value.averageRuntime + " dk" },
  { name: "Takipçi", value: "18685" },
  { name: "IMDB", value: show.value.rating?.average },
  { name: "Yapım Yılı", value: show.value.premiered?.slice(0, 4) },
]);
</script>