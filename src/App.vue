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
  //data.persons = data.persons.slice().sort((a, b) => b.PersoonGeschenken.length - a.PersoonGeschenken.length);
  data.persons = data.persons.slice().sort((a, b) => b.PersoonReizen.length - a.PersoonReizen.length);
});
</script>

<template>
  <div class="Container">
    <div class="FrontRunners"></div>
    <div class="Personen">
      <Persoon
        v-for="person in data.persons"
        :persoon="person"
      />
    </div>
  </div>
</template>

<style lang="scss">
/*
A = #4C7291 text
B = #DEA2A0 Background
C = #8AB9DF 
D = #DADE73
E = #8F9153
*/

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  color: #2e4457;
}

.FrontRunners {
  width: 100%;
  height: 20rem;
  background: #dea2a0;
}

.Personen {
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;
}
</style>
