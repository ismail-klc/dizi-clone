<template>
  <div class="flex flex-col lg:flex-row lg:space-x-8">
    <div class="flex flex-col lg:w-[320px] shrink-0 md:flex-row lg:flex-col">
      <img class="object-cover max-h-[350px] md:max-h-fit w-full lg:max-h-fit md:w-auto" src="/img/lcdp.jpg" alt="asd" />

      <!-- cast -->
      <Cast />
      <!-- cast end -->
    </div>

    <div class="flex flex-col mt-4 text-xs lg:mt-0">
      <h2 class="text-white uppercase">Genel bakış</h2>
      <p class="mt-3 text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsam iure tempore molestias quod qui illo hic eveniet. Aliquam laboriosam voluptas
        consequuntur? Inventore consequatur voluptatem laboriosam, reprehenderit non atque, accusamus distinctio laborum vitae, consequuntur quos. Saepe
        quisquam, ut fuga beatae voluptatibus corrupti amet quas minus asperiores doloremque, vel tempore, pariatur ducimus eveniet natus nobis eligendi velit!
        Culpa, sapiente esse beatae temporibus nihil quod! Voluptate ex dolorem harum tenetur aspernatur dicta in voluptas voluptatem ab modi eaque repellat,
        sequi omnis similique nobis eius enim quia! Blanditiis magni nemo quam molestiae, enim officia distinctio quasi aspernatur quia cum. Sit ipsa mollitia
        voluptate?
      </p>

      <div class="flex mt-4 overflow-x-auto">
          <div v-for="(item,index) in infos" :key="index" 
          class="flex flex-col flex-1 shrink-0 border p-4 overflow-x-auto border-[#1e2029] space-y-1">
              <span class="text-gray-500 uppercase">{{item.name}}</span>
              <span class="text-white">{{item.value}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cast from "../components/Cast.vue";
const infos = [
  { name: "Ülke", value: "İspanya" },
  { name: "Süre", value: "40 dk" },
  { name: "Takipçi", value: "18685" },
  { name: "IMDB", value: "8.3" },
  { name: "Yapım Yılı", value: "2017" },
];
</script>