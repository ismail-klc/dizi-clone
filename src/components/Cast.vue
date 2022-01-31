<template>
  <div class="w-full md:ml-6 lg:ml-0">
    <h4 class="mt-4 mb-4 text-sm text-white uppercase lg:mt-4 md:mt-0">Öne çıkan oyuncular</h4>
    <div>
      <div v-for="i in 5" :key="i" class="flex items-center p-4 space-x-4 border border-[#1e2029]">
        <div class="w-10 h-10 bg-black rounded-full"></div>
        <div class="flex flex-col">
          <span class="text-xs text-white">Alvaro Morte</span>
          <span class="text-xs text-gray-500">El Profesor</span>
        </div>
      </div>
    </div>
  </div>
</template>