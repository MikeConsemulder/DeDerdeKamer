<script setup lang="ts">
import type { Person } from "@/ts/types/Person";
import Geschenken from "./Geschenken.vue";
import Reizen from "./Reizen.vue";
import { onMounted, ref } from "vue";
import type { PersoonReis } from "@/ts/types/PersoonReis";
import type { PersoonGeschenk } from "@/ts/types/PersoonGeschenk";
import { PersonDataType } from "@/ts/enums/personDataType";
import type { FractieZetelPersoon } from "@/ts/types/FractieZetelPersoon";
import type { Fractie } from "@/ts/types/Fractie";

const props = defineProps<{
  persoon: Person;
  displayData: {
    type: PersonDataType;
    data: PersoonGeschenk[] | PersoonReis[];
  };
}>();

const moreInfoCollapsed = ref(true);

const personImgUrl = `https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Persoon/${props.persoon.Id}/resource`;

const getActiveParty = (fractieZetelsPersoon: FractieZetelPersoon[]): Fractie | undefined => {
  const fractieZetelPersoon = fractieZetelsPersoon.find((fractieZetelPersoon: FractieZetelPersoon) => {
    return !fractieZetelPersoon.TotEnMet;
  });

  if (!fractieZetelPersoon) return undefined;

  return fractieZetelPersoon.FractieZetel.Fractie;
};

const activeParty = getActiveParty(props.persoon.FractieZetelsPersoon);
const partyImgUrl = `https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Fractie/${activeParty?.Id}/resource`;

onMounted(() => {});
</script>

<template>
  <div class="Persoon">
    <div class="PersoonGegevens">
      <div class="AvatarSection">
        <div class="PersoonAvatar">
          <img
            :src="personImgUrl"
            alt=""
          />
        </div>
        <div class="PartijLogo">
          <img
            :src="partyImgUrl"
            alt=""
          />
        </div>
      </div>

      <div class="DataSection">
        {{ props.displayData.data.length }}
      </div>
      <div class="NameSection">
        <div class="PersoonVoornaam">{{ props.persoon.Roepnaam }}</div>
        <div class="PersoonAchternaam">{{ props.persoon.Achternaam }}</div>
      </div>
      <div
        class="MoreInfo"
        @click="moreInfoCollapsed = !moreInfoCollapsed"
      >
        ...
      </div>
    </div>
    <div v-if="!moreInfoCollapsed">
      <Geschenken
        v-if="props.displayData.type === PersonDataType.GESCHENK && props.persoon.PersoonGeschenken.length"
        :persoonGeschenken="props.persoon.PersoonGeschenken"
      />
      <Reizen
        v-if="props.displayData.type === PersonDataType.REIS && props.persoon.PersoonReizen.length"
        :persoonReizen="props.persoon.PersoonReizen"
      />
    </div>
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

      font-size: 0.8rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
