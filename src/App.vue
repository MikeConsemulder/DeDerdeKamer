<script setup lang="ts">
import { onMounted, reactive } from "vue";
import Fractie from "./components/Fractie.vue";
import { DataRetriever } from "./infrastructure/DataRetriever";
import type { Person } from "./ts/types/Person";

const dataRetriever = new DataRetriever();

onMounted(async () => {
  const personArguments = {
    id: "",
    geslacht: "vrouw",
  };
  const persons = await dataRetriever.getPersons(personArguments);
  console.log(persons);
});
</script>

<template>
  <div class="Container">
    <Fractie></Fractie>
  </div>
</template>

<style scoped lang="scss"></style>
