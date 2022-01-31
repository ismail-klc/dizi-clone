<template>
  <swiper class="w-full h-full pb-4" loop="{true}" :autoplay="autoplay" :modules="modules" :slides-per-view="count" :space-between="10" navigation>
    <swiper-slide
      class="p-1 relative cursor-pointer transition-all delay-75 hover:bg-[#2b2d36] rounded-lg inline-flex flex-col bg-[#1e2029]"
      v-for="(img, index) in images"
      :key="index"
    >
      <img class="rounded-lg" :src="img" :alt="img" />
      <div class="absolute px-2 text-sm font-semibold rounded-xl top-2 right-2 text-white bg-[#1e2029]">2019</div>
      <div class="py-2 pl-3 space-y-1">
        <div class="text-sm font-semibold text-gray-500">Suç,Gizem,Aksiyon</div>
        <div class="flex items-center justify-between text-white">
          <span>La casa de papel</span>
          <button>
            <EvaMoreVerticalFill />
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "@vue/runtime-core";
import EvaMoreVerticalFill from "./Icons/EvaMoreVerticalFill.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const images = ["img/la-casa-de-papel--1632741922.jpg", "img/peaky-blinders--1632742820.jpg", "img/witcher.jpg"];

const modules = [Navigation, Scrollbar, A11y, Autoplay];
const count = ref(window.innerWidth > 480 ? 3 : 1);
const autoplay = ref({ delay: 3000, disableOnInteraction: false });

window.addEventListener("resize", () => {
  count.value = window.innerWidth > 480 ? 3 : 1;
});
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  background-color: black;
  background-color: black;
  opacity: 0.8;
  border-radius: 50%;
  padding: 30px;
  color: #fff !important;
  fill: #fff !important;
  stroke: #fff !important;
}
</style>