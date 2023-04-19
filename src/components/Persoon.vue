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
  <div class="Persoon p-6 m-6 max-w-sm mx-auto bg-green-200 rounded-xl shadow-lg flex items-center space-x-4">
    <div class="PersoonGegevens">
      <div>{{ props.persoon.Voornamen }} {{ props.persoon.Achternaam }}</div>
      <div>geschenken: {{ props.persoon.PersoonGeschenken.length }}</div>
      <div>Reizen: {{ props.persoon.PersoonReizen.length }}</div>
    </div>
    <!-- <Geschenken
      v-if="props.persoon.PersoonGeschenken.length"
      :persoonGeschenken="props.persoon.PersoonGeschenken"
    />
    <Reizen
      v-if="props.persoon.PersoonReizen.length"
      :persoonReizen="props.persoon.PersoonReizen"
    /> -->
  </div>
</template>