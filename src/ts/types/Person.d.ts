import type { PersoonGeschenk } from "./PersoonGeschenk";

export type Person = {
  Id: string | null;
  Nummer: number | null;
  Titels: string | null;
  Initialen: string | null;
  Tussenvoegsel: string | null;
  Achternaam: string | null;
  Voornamen: string | null;
  Roepnaam: string | null;
  Geslacht: string | null;
  Functie: string | null;
  Geboortedatum: string | null;
  Geboorteplaats: string | null;
  Geboorteland: string | null;
  Overlijdensdatum: string | null;
  Overlijdensplaats: string | null;
  Woonplaats: string | null;
  Land: string | null;
  Fractielabel: string | null;
  ContentType: string | null;
  ContentLength: number | null;
  GewijzigdOp: string | null;
  ApiGewijzigdOp: string | null;
  Verwijderd: boolean | null;
  PersoonGeschenken: PersoonGeschenk[];
};

export type PersonResponse = {
  ["@odata.context"]: string;
  value: Persoon[];
  ["@odata.nextLink"]: string;
};
