<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import Persoon from "./components/Persoon.vue";
import { DataRetriever } from "./infrastructure/DataRetriever";
import { PersonDataType } from "./ts/enums/personDataType";
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
          <h2>Transparantie</h2>
          <p>Toegang tot overheidsdata stelt burgers in staat om te begrijpen hoe de overheid functioneert, welke beslissingen er worden genomen en hoe publieke middelen worden gebruikt. Dit bevordert transparantie en verantwoording, waardoor burgers beter geïnformeerd zijn en in staat zijn om de overheid ter verantwoording te roepen.</p>
        </section>
        <section>
          <h2>Verantwoording</h2>
          <p>Door inzicht te hebben in overheidsdata kunnen beleidsmakers, onderzoekers en het publiek beter geïnformeerde beslissingen nemen. Het analyseren van gegevens kan inzichten opleveren over maatschappelijke problemen, trends en patronen, waardoor beleid effectiever kan worden ontwikkeld en aangepast aan de behoeften van de samenleving.</p>
        </section>
        <section>
          <h2>Participatie</h2>
          <p>Toegang tot overheidsdata stimuleert samenwerking en participatie, waarbij burgers, non-profitorganisaties en de private sector data gebruiken om maatschappelijke uitdagingen aan te pakken en nieuwe partnerschappen te creëren.</p>
        </section>
      </div>
    </div>
    <div class="DataContainer">
      <div>
        <h2>Geschenken</h2>
        <div class="List">
          <Persoon
            v-for="person in data.persons.sorted.n_gifts"
            :persoon="person"
            :display-data="{
              type: PersonDataType.GESCHENK,
              data: person.PersoonGeschenken,
            }"
          />
        </div>
      </div>

      <div>
        <h2>Reizen</h2>
        <div class="List">
          <Persoon
            v-for="person in data.persons.sorted.n_travels"
            :persoon="person"
            :display-data="{
              type: PersonDataType.REIS,
              data: person.PersoonReizen,
            }"
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

  padding: 1rem 0 2rem;

  width: 100%;

  color: #fdfdfe;
  background: #16161a;

  h1,
  h5 {
    margin: 0;
    padding: 0;
  }

  h5 {
    margin-top: 2rem;

    font-weight: 100;
    font-style: italic;

    &::before,
    &::after {
      content: " - ";
    }
  }

  h1 {
    margin: 3rem 0.5rem;

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
