import type { PersoonGeschenk } from "./PersoonGeschenk";
import type { PersoonReis } from "./PersoonReis";

export type Person = {
  Id: string;
  Nummer: number;
  Titels: string;
  Initialen: string;
  Tussenvoegsel: string;
  Achternaam: string;
  Voornamen: string;
  Roepnaam: string;
  Geslacht: string;
  Functie: string;
  Geboortedatum: string;
  Geboorteplaats: string;
  Geboorteland: string;
  Overlijdensdatum: string;
  Overlijdensplaats: string;
  Woonplaats: string;
  Land: string;
  Fractielabel: string;
  ContentType: string;
  ContentLength: number;
  GewijzigdOp: string;
  ApiGewijzigdOp: string;
  Verwijderd: boolean;
  PersoonGeschenken: PersoonGeschenk[];
  PersoonReizen: PersoonReis[];
  FractieZetelsPersoon: FractieZetelPersoon[];
};

export type PersonResponse = {
  ["@odata.context"]: string;
  value: Persoon[];
  ["@odata.nextLink"]: string;
};
