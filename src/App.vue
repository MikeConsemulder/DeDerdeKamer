<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import Persoon from "./components/Persoon.vue";
import { DataRetriever } from "./infrastructure/DataRetriever";
import type { Person } from "./ts/types/Person";

const dataRetriever = new DataRetriever();

const persons = ref([] as Person[]);
const data = reactive({
  persons,
});

onMounted(async () => {
  const personArguments = {
    id: "",
    geslacht: "",
  };

  data.persons = (await dataRetriever.getPersons(personArguments)) as Person[];
  data.persons = data.persons.slice().sort((a, b) => b.PersoonGeschenken.length - a.PersoonGeschenken.length);
});
</script>

<template>
  <div class="Container">
    <div class="Personen">
      <Persoon
        v-for="person in data.persons"
        :persoon="person"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.Personen {
  display: flex;
  flex-direction: column;

  width: 500px;
  margin: 0 auto;
}
</style>
