<script setup lang="ts">
import type { Person } from "@/ts/types/Person";
import { onMounted } from "vue";
import Geschenken from "./Geschenken.vue";
import Reizen from "./Reizen.vue";

const props = defineProps<{
  persoon: Person;
}>();

onMounted(() => {
  console.log(props.persoon);
});
</script>

<template>
  <div class="Persoon">
    <div class="PersoonGegevens">
      <div>{{ props.persoon.Voornamen }} {{ props.persoon.Achternaam }}</div>
      <div>geschenken: {{ props.persoon.PersoonGeschenken.length }}</div>
      <div>Reizen: {{ props.persoon.PersoonReizen.length }}</div>
    </div>
    <Geschenken
      v-if="props.persoon.PersoonGeschenken.length"
      :persoonGeschenken="props.persoon.PersoonGeschenken"
    />
    <Reizen
      v-if="props.persoon.PersoonReizen.length"
      :persoonReizen="props.persoon.PersoonReizen"
    />
  </div>
</template>

<style scoped lang="scss">
.Persoon {
  position: relative;

  padding: 0.5rem 0.5rem 0;

  box-sizing: border-box;

  background: #8ab9df;

  .PersoonGegevens {
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:nth-of-type(even) {
    //background: rgb(189, 240, 240);
  }

  &:nth-of-type(odd) {
    //background: rgb(133, 216, 216);
  }
}
</style>
