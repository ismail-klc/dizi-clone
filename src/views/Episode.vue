<template>
  <div class="space-y-5 text-white">
    <div class="flex justify-between text-sm text-gray-400">
      <div>
        <router-link
          :to="{
            name: 'Detay',
            params: {
              slug,
            },
          }"
          class="capitalize"
          >{{ showName }} >
        </router-link>
        <span>{{ seasonId }}. Sezon {{ bolumId }}. Bölüm</span>
      </div>
      <div>{{ date }}</div>
    </div>

    <!-- title -->
    <div>
      <h1 class="mt-4 text-3xl font-semibold capitalize">
        {{ showName }}
        <span class="font-normal text-gray-400">{{ seasonId }}. Sezon {{ bolumId }}. Bölüm</span>
      </h1>
    </div>

    <!-- video -->
    <div>
      <div class="w-full bg-black aspect-video"></div>
    </div>
    <!-- video end -->

    <!-- genel bakış -->
    <div>
      <h4 class="text-sm uppercase">Genel bakış</h4>
      <div class="border border-[#1e2029] mt-4">
        <div class="flex border-b border-[#1e2029] px-3 py-4">
          <img :src="data.image?.medium" class="object-cover w-16 aspect-square" alt="" />
          <div class="flex flex-col justify-between ml-2">
            <router-link
              :to="{
                name: 'Detay',
                params: {
                  slug,
                },
              }"
              class="text-xs capitalize bg-[#1e2029] p-1"
              >Dizi sayfasına git
            </router-link>
            <button class="text-white h-8 uppercase text-sm shrink-0 px-3 bg-[#1e2029]">Takip et</button>
          </div>
        </div>
        <div v-html="data.summary" class="px-3 py-4 text-sm text-justify text-gray-400"></div>
      </div>
    </div>
    <!-- genel bakış end -->

    <!-- comments -->
    <div>
      <span class="pl-2 text-sm uppercase border-l-[6px] border-white">0 yorum</span>

      <!-- new comment -->
      <div class="border border-[#1e2029] mt-4 flex">
        <input type="text" class="flex-1 outline-none mx-5 mt-1.5 rounded-md text-xs py-3 px-5 mb-6 bg-[#1e2029]" placeholder="Yorumunuzu yazın..." />
      </div>
    </div>
    <!-- comments end -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import appAxios from "../utils/appAxios";
import { DateTime } from "luxon";

const router = useRouter();
const data = ref({});

const { slug, seasonId, bolumId } = router.currentRoute.value.params;
const slugs = slug.toString().split("-");
const id = slugs[slugs.length - 1];

let showName = [...slugs];
showName.pop();
showName = showName.join(" ");

onMounted(async () => {
  const res = await appAxios.get(`shows/${id}/episodebynumber?season=${seasonId}&number=${bolumId}`);
  data.value = res.data;
  console.log(res.data);
});

const date = computed(() => DateTime.fromISO(data.value.airstamp).toLocaleString({ month: "long", day: "numeric", year: "numeric" }));
</script>