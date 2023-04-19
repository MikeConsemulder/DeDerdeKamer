<script setup lang="ts">
import type { PersoonGeschenk } from "@/ts/types/PersoonGeschenk";
import { ref } from "vue";

const isActive = ref(false);

const props = defineProps<{
  persoonGeschenken: PersoonGeschenk[];
}>();
</script>

<template>
  <div
    v-for="geschenk in props.persoonGeschenken"
    :class="{ active: isActive }"
    class="Geschenken"
  >
    {{ geschenk.Omschrijving }}
  </div>
</template>