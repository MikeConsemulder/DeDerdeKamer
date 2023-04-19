<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import Persoon from "./components/Persoon.vue";
import { DataRetriever } from "./infrastructure/DataRetriever";
import type { Person } from "./ts/types/Person";

const dataRetriever = new DataRetriever();

type PersonObject = {
  raw: Person[];
  sorted: {
    n_gifts: Person[];
    n_travels: Person[];
  };
};

const persons = ref({
  raw: {},
  sorted: {
    n_gifts: {},
    n_travels: {},
  },
} as PersonObject);

const data = reactive({
  persons,
});

onMounted(async () => {
  const personArguments = {
    id: "",
    geslacht: "",
  };

  data.persons.raw = (await dataRetriever.getPersons(personArguments)) as Person[];
  data.persons.raw = data.persons.raw.slice().sort((a, b) => a.Voornamen.localeCompare(b.Voornamen));
  data.persons.sorted.n_gifts = data.persons.raw.slice().sort((a, b) => b.PersoonGeschenken.length - a.PersoonGeschenken.length);
  data.persons.sorted.n_travels = data.persons.raw.slice().sort((a, b) => b.PersoonReizen.length - a.PersoonReizen.length);
});
</script>

<template>
  <div class="Container">
    <div class="FrontRunners"></div>
    <div class="PersonenContainer">
      <!-- <div class="Personen">
        <Persoon
          v-for="person in data.persons.raw"
          :persoon="person"
        />
      </div> -->
      <div class="Personen">
        <Persoon
          v-for="person in data.persons.sorted.n_gifts"
          :persoon="person"
        />
      </div>
      <!-- <div class="Personen">
        <Persoon
          v-for="person in data.persons.sorted.n_travels"
          :persoon="person"
        />
      </div> -->
    </div>
  </div>
</template>
