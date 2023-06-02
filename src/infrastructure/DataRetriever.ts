import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { watch } from "vue";

type DataEndPoints = {
  persoon: string;
  persoonGeschenk: string;
};

export class DataRetriever {
  private baseUrl = "/api/OData/v4/2.0";

  private endPoints: DataEndPoints = {
    persoon: "Persoon",
    persoonGeschenk: "PersoonGeschenk",
  };

  async getFraction() {
    const data = await fetch(this.baseUrl);
    const dataJson = await data.json();
    return dataJson;
  }

  async getPerson() {
    const data = await fetch(`${this.baseUrl}/${this.endPoints.persoon}`);
    const dataJson = await data.json();
    return dataJson;
  }

  async getPersonGift() {
    const data = await fetch(`${this.baseUrl}/${this.endPoints.persoonGeschenk}`);
    const dataJson = await data.json();
    return dataJson;
  }

  async getPersons({ id, geslacht }: { id?: string; geslacht?: string }) {
    const { result } = useQuery(
      gql`
        query GetPersonen($geslacht: String, $personsId: ID, $functie: String) {
          personen(geslacht: $geslacht, id: $personsId, functie: $functie) {
            Id
            Voornamen
            Roepnaam
            Achternaam
            Geslacht
            Fractielabel
            Functie
            PersoonGeschenken {
              Omschrijving
              Persoon {
                Voornamen
                Achternaam
              }
            }
            PersoonReizen {
              Bestemming
              BetaaldDoor
              Van
              TotEnMet
              Doel
              Gewicht
            }
            PersoonNevenFuncties {
              Omschrijving
              PersoonNevenFunctieInkomsten {
                Bedrag
                BedragValuta
                Jaar
                Frequentie
              }
            }
            FractieZetelsPersoon {
              Van
              TotEnMet
              FractieZetel {
                Fractie {
                  Id
                  Afkorting
                  NaamNL
                  NaamEN
                  AantalZetels
                  AantalStemmen
                  Nummer
                }
              }
            }
          }
        }
      `,
      {
        geslacht: geslacht,
        personsId: id,
        fractielabel: null,
        functie: "Tweede Kamerlid",
      }
    );

    return new Promise((resolve) => {
      watch(result, (value) => {
        resolve(value.personen);
      });
    });
  }
}
