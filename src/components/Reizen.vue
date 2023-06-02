<script setup lang="ts">
import type { PersoonReis } from "@/ts/types/PersoonReis";
import { ref } from "vue";

const isActive = ref(false);

const props = defineProps<{
  persoonReizen: PersoonReis[];
}>();
</script>

<template>
  <div class="Reizen">
    <table>
      <thead>
        <tr>
          <th>Bestemming</th>
          <th>Doel</th>
          <th>Betaald door</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="reis in props.persoonReizen"
          :key="(reis.Id as string)"
        >
          <td>{{ reis.Bestemming }}</td>
          <td>{{ reis.Doel }}</td>
          <td>{{ reis.BetaaldDoor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss">
.Reizen {
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  overflow: hidden;

  .Reis {
    margin: 0.5rem 0;
    padding-bottom: 0.5rem;

    border-bottom: 1px solid grey;
    font-weight: 400;
    font-size: 0.8rem;
  }
}
</style>
