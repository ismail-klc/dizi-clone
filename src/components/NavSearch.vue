<template>
  <div class="flex-1 hidden ml-12 space-x-6 md:flex">
    <div class="relative flex items-center flex-1">
      <input
        placeholder="Dizi ara..."
        type="text"
        class="
          py-2
          w-full
          pl-5
          text-sm
          pr-14
          outline-none
          rounded-full
          text-white
          bg-[#1d2129]
        "
      />
      <button class="absolute right-4">
        <UilSearch />
      </button>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script setup>
import UilSearch from "./Icons/UilSearch.vue";
</script>