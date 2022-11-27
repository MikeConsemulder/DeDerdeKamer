<script setup lang="ts">
import type { Person } from "@/ts/types/Person";
import Geschenken from "./Geschenken.vue";

const props = defineProps<{
  persoon: Person;
}>();
</script>

<template>
  <div class="Persoon">
    <div class="PersoonGegevens">
      <div>{{ props.persoon.Voornamen }} {{ props.persoon.Achternaam }}</div>
      <div>{{ props.persoon.PersoonGeschenken.length }}</div>
    </div>
    <Geschenken
      v-if="props.persoon.PersoonGeschenken.length"
      :persoonGeschenken="props.persoon.PersoonGeschenken"
    />
  </div>
</template>

<style scoped lang="scss">
.Persoon {
  position: relative;

  padding: 0.5rem 0.5rem 0;

  box-sizing: border-box;

  .PersoonGegevens {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:nth-of-type(even) {
    background: lightcyan;
  }

  &:nth-of-type(odd) {
    background: lightblue;
  }
}
</style>
