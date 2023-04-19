<script setup lang="ts">
import type { PersoonReis } from "@/ts/types/PersoonReis";
import { ref } from "vue";

const isActive = ref(false);

const props = defineProps<{
  persoonReizen: PersoonReis[];
}>();
</script>

<template>
  <div
    v-for="reis in props.persoonReizen"
    :class="{ active: isActive }"
    class="Reizen"
  >
    {{ reis.Bestemming }} - Doel {{ reis.Doel }} - Betaald door: {{ reis.BetaaldDoor }}
  </div>
</template>