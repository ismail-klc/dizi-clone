<template>
  <div>keşfet</div>
</template>

<script setup>
import appAxios from "../utils/appAxios";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(async () => {
  console.log(router.currentRoute.value.query.p);
});
</script>