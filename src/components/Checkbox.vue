<template>
  <div>
    <div class="flex items-center">
      <input type="checkbox" :id="key" name="confirmation" class="absolute w-4 h-4 opacity-0" />
      <div class="flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 bg-gray-600 border-2 border-gray-600 rounded-full focus-within:border-gray-600">
        <MdiCheckboxBlankCircle />
      </div>
      <label :for="key" class="text-gray-600 select-none">{{ title }}</label>
    </div>
  </div>
</template>

<script setup>
import MdiCheckboxBlankCircle from "./Icons/MdiCheckboxBlankCircle.vue";
defineProps({
  title: String,
  key: String,
});
</script>