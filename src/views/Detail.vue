<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-3xl text-white">
        {{ show.name }} <span class="text-gray-400">({{ show.premiered?.slice(0, 4) }})</span>
      </h1>
      <button class="text-white h-10 uppercase text-sm shrink-0 px-3 bg-[#1e2029]">Takip et</button>
    </div>

    <div class="inline-flex pb-3 mt-8 text-xs font-semibold text-green-600 uppercase border-b border-green-600">Genel bakış</div>

    <div class="flex flex-col mt-6 lg:flex-row lg:space-x-8">
      <div class="flex flex-col lg:w-[320px] shrink-0 md:flex-row lg:flex-col">
        <img class="object-cover max-h-[350px] md:max-h-fit w-full lg:max-h-fit md:w-auto" :src="show.image?.original" alt="asd" />

        <!-- cast -->
        <Cast :cast="cast"/>
        <!-- cast end -->
      </div>

      <div class="flex flex-col mt-4 text-xs lg:mt-0">
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
          <h4 class="font-semibold uppercase">{{show.name}} DİZİSİNİN TÜM SEZON VE BÖLÜMLERİ</h4>
          <Checkbox :key="0" :title="'Tümünü izlendi olarak işaretle'" />
        </div>

        <!-- episodes -->
        <div class="flex flex-col md:flex-row mt-4 border border-[#1e2029]">
          <div class="flex border border-[#1e2029]">
            <ul class="flex flex-row min-w-0 overflow-x-auto text-gray-600 md:flex-col">
              <li v-for="i in 5" :key="i" class="px-4 py-3 cursor-pointer uppercase border-r shrink-0 md:border-b border-[#1e2029]">Sezon {{ i }}</li>
            </ul>
          </div>
          <div class="flex flex-1">
            <ul class="w-full text-white">
              <li v-for="i in 20" :key="i" class="px-4 py-3 flex border-b border-[#1e2029]">
                <Checkbox :title="'Bölüm ' + i" :key="i" />
                <h6 class="flex-1 ml-6 font-semibold text-white truncate cursor-pointer hover:text-green-700">{{ i }}. Bölüm</h6>
                <!-- date -->
                <span class="text-gray-600">1 Ocak 2022</span>
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
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Cast from "../components/Cast.vue";
import Checkbox from "../components/Checkbox.vue";
import appAxios from "../utils/appAxios";

const show = ref({});
const cast = ref([]);

const router = useRouter();
onMounted(async () => {
  const slug = router.currentRoute.value.params.slug.toString();
  let searchSlug = slug.split("-").join("+");

  console.log(searchSlug);
  let res = await appAxios.get(`singlesearch/shows?q=${searchSlug}`);
  show.value = res.data;

  res = await appAxios.get(`shows/${show.value.id}/cast`);
  cast.value = res.data.slice(0,5);
  console.log(cast.value);
});

const infos = computed(() => [
  { name: "Dil", value: show.value.language},
  { name: "Süre", value: "40 dk" },
  { name: "Takipçi", value: "18685" },
  { name: "IMDB", value: show.value.rating?.average },
  { name: "Yapım Yılı", value: show.value.premiered?.slice(0, 4) },
]);
</script>