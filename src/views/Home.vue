<template>
  <div>
    <FeaturedSeries :shows="shows" />
    <Shortcuts />
    <LastEpisodes :lastEpisodes="lastEpisodes"/>
  </div>
</template>

<script setup>
import FeaturedSeries from "../components/FeaturedSeries.vue";
import Shortcuts from "../components/Shortcuts.vue";
import LastEpisodes from "../components/LastEpisodes.vue";
import appAxios from "../utils/appAxios";
import { onMounted, ref } from "vue";

const shows = ref([]);
const lastEpisodes = ref([]);

onMounted(async () => {
  for (let i = 0; i < 6; i++) {
    const id = Math.round(Math.random() * 200);
    try {
      const res = await appAxios(`shows/${id}`);
      shows.value.push(res.data);
    } catch (error) {}
  }

  const res = await appAxios.get(`schedule`);
  lastEpisodes.value = res.data.filter((x) => x.season < 25 && x.number < 50).slice(0, 20);
});
</script>

<style>
</style>