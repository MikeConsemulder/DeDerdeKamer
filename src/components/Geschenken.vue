<script setup lang="ts">
import type { PersoonGeschenk } from "@/ts/types/PersoonGeschenk";
import { ref } from "vue";

const isActive = ref(false);

const props = defineProps<{
  persoonGeschenken: PersoonGeschenk[];
}>();
</script>

<template>
  <div class="Geschenken">
    <table>
      <thead>
        <tr>
          <th>Omschrijving</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="geschenk in props.persoonGeschenken"
          :key="(geschenk.Id as string)"
        >
          <td>{{ geschenk.Omschrijving }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.Geschenken {
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  overflow: hidden;

  .Geschenk {
    margin: 0.5rem 0;
    padding-bottom: 0.5rem;

    border-bottom: 1px solid grey;
    font-weight: 400;
    font-size: 0.8rem;
  }
}
</style>
