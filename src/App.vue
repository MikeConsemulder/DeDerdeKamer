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
    <div class="HeroImage">
      <h5>catchy phrase</h5>
      <h1>De derde kamer.</h1>
      <div class="HeroInformation">
        <section>
          <h2>Wat is deze?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim, ante quis tempus malesuada, purus libero laoreet enim, vitae accumsan lectus dolor vel nisi. Donec et laoreet lectus. Nulla laoreet tellus nulla, quis malesuada enim iaculis sed. Vestibulum semper nisl eu libero ullamcorper laoreet.</p>
        </section>
        <section>
          <h2>Wat is die?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim, ante quis tempus malesuada, purus libero laoreet enim, vitae accumsan lectus dolor vel nisi. Donec et laoreet lectus. Nulla laoreet tellus nulla, quis malesuada enim iaculis sed. Vestibulum semper nisl eu libero ullamcorper laoreet.</p>
        </section>
        <section>
          <h2>Wat is dat?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim, ante quis tempus malesuada, purus libero laoreet enim, vitae accumsan lectus dolor vel nisi. Donec et laoreet lectus. Nulla laoreet tellus nulla, quis malesuada enim iaculis sed. Vestibulum semper nisl eu libero ullamcorper laoreet.</p>
        </section>
      </div>
    </div>
    <div class="DataContainer">
      <div>
        Geschenken
        <div class="List">
          <Persoon
            v-for="person in data.persons.sorted.n_gifts"
            :persoon="person"
            :data-value="person.PersoonGeschenken.length"
          />
        </div>
      </div>

      <div>
        Reizen
        <div class="List">
          <Persoon
            v-for="person in data.persons.sorted.n_travels"
            :persoon="person"
            :data-value="person.PersoonReizen.length"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,100&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.HeroImage {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 500px;

  color: #fdfdfe;
  background: #16161a;

  h1,
  h5 {
    margin: 0;
    padding: 0;
  }

  h5 {
    margin-top: 3rem;

    font-weight: 100;
    font-style: italic;

    &::before,
    &::after {
      content: " - ";
    }
  }

  h1 {
    margin-top: 3rem;

    font-size: 5rem;
    font-weight: 900;
  }

  .HeroInformation {
    display: flex;
    justify-content: space-around;

    margin-top: 5rem;

    width: 100%;

    section {
      flex: 1;

      margin: 0 1rem;

      max-width: 300px;

      h2 {
        font-size: 1rem;
        font-weight: bold;
      }

      p {
        color: #a7abae;
        font-size: 0.8rem;
        line-height: 1.2rem;
      }
    }
  }
}

.DataContainer {
  display: flex;
  justify-content: space-around;

  margin-top: 2rem;

  .List {
    padding: 1rem 0;

    width: 400px;

    max-height: 500px;

    box-shadow: 2px 2px 4px 0px #a7abae;

    overflow: scroll;
  }
}
</style>
