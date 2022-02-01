<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-3xl text-white">La casa de papel <span class="text-gray-400">(2017)</span></h1>
      <button class="text-white h-10 uppercase text-sm shrink-0 px-3 bg-[#1e2029]">Takip et</button>
    </div>

    <div class="inline-flex pb-3 mt-8 text-xs font-semibold text-green-600 uppercase border-b border-green-600">
      Genel bakış
    </div>

    <div class="flex flex-col mt-6 lg:flex-row lg:space-x-8">
      <div class="flex flex-col lg:w-[320px] shrink-0 md:flex-row lg:flex-col">
        <img class="object-cover max-h-[350px] md:max-h-fit w-full lg:max-h-fit md:w-auto" src="/img/lcdp.jpg" alt="asd" />

        <!-- cast -->
        <Cast />
        <!-- cast end -->
      </div>

      <div class="flex flex-col mt-4 text-xs lg:mt-0">
        <h2 class="text-white uppercase">Genel bakış</h2>
        <p class="mt-3 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsam iure tempore molestias quod qui illo hic eveniet. Aliquam laboriosam
          voluptas consequuntur? Inventore consequatur voluptatem laboriosam, reprehenderit non atque, accusamus distinctio laborum vitae, consequuntur quos.
          Saepe quisquam, ut fuga beatae voluptatibus corrupti amet quas minus asperiores doloremque, vel tempore, pariatur ducimus eveniet natus nobis eligendi
          velit! Culpa, sapiente esse beatae temporibus nihil quod! Voluptate ex dolorem harum tenetur aspernatur dicta in voluptas voluptatem ab modi eaque
          repellat, sequi omnis similique nobis eius enim quia! Blanditiis magni nemo quam molestiae, enim officia distinctio quasi aspernatur quia cum. Sit
          ipsa mollitia voluptate?
        </p>

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
          <img src="/img/la-casa-de-papel--1632741922.jpg" alt="trailer-img" class="object-cover h-24 w-44" />
          <div class="flex flex-col justify-center flex-1 ml-4 text-white">
            <span class="text-xl">Fragman</span>
            <span class="text-base uppercase">Official Trailer</span>
            <span class="text-gray-400">Fragman</span>
          </div>
        </div>
        <!-- trailer end -->

        <div class="flex flex-col min-w-0 mt-4 space-y-2 text-white md:items-center md:flex-row md:justify-between">
          <h4 class="font-semibold">LA CASA DE PAPEL DİZİSİNİN TÜM SEZON VE BÖLÜMLERİ</h4>
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
import Cast from "../components/Cast.vue";
import Checkbox from "../components/Checkbox.vue";
const infos = [
  { name: "Ülke", value: "İspanya" },
  { name: "Süre", value: "40 dk" },
  { name: "Takipçi", value: "18685" },
  { name: "IMDB", value: "8.3" },
  { name: "Yapım Yılı", value: "2017" },
];
</script>