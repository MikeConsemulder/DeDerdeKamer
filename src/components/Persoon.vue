<script setup lang="ts">
import type { Person } from "@/ts/types/Person";
import { onMounted } from "vue";

const props = defineProps<{
  persoon: Person;
  dataValue: number;
}>();

let personImgUrl = `https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Persoon/${props.persoon.Id}/resource`;

onMounted(() => {});
</script>

<template>
  <div class="Persoon">
    <div class="PersoonGegevens">
      <div class="AvatarSection">
        <div class="PersoonAvatar">
          <img
            :src="personImgUrl"
            alt="Afbeelding van persoon"
          />
        </div>
        <div class="PartijLogo"></div>
      </div>

      <div class="DataSection">
        {{ props.dataValue }}
      </div>
      <div class="NameSection">
        <div class="PersoonVoornaam">{{ props.persoon.Roepnaam }}</div>
        <div class="PersoonAchternaam">{{ props.persoon.Achternaam }}</div>
      </div>
      <div class="MoreInfo">...</div>
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
<style lang="scss">
.Persoon {
  margin: 1rem 0;
  padding: 0 1rem;

  .PersoonGegevens {
    display: flex;
    justify-content: left;
    align-items: center;

    .AvatarSection,
    .DataSection,
    .NameSection {
      display: flex;
      flex-basis: 0;
    }

    .NameSection {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin: 0 1rem;

      .PersoonVoornaam {
      }

      .PersoonAchternaam {
        margin-left: 0.8rem;

        font-size: 0.8rem;
      }
    }

    .AvatarSection {
      min-width: 90px;
    }

    .DataSection {
      margin-left: 1rem;
      min-width: 40px;
    }

    .PersoonAvatar,
    .PartijLogo {
      width: 35px;
      height: 35px;

      margin-right: 0.5rem;

      border-radius: 50%;

      background: white;
      box-shadow: 1px 1px 2px 0px #a7abae;

      overflow: hidden;

      img {
        min-height: 35px;
        min-width: 35px;
        width: 100%;
      }
    }

    .MoreInfo {
      margin-left: auto;
    }
  }
}
</style>
