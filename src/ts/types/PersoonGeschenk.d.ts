import type { Person } from "./Person";

export type PersoonGeschenk = {
  Id: string;
  Omschrijving: string;
  Datum: string;
  Gewicht: number;
  GewijzigdOp: string;
  ApiGewijzigdOp: string;
  Verwijderd: Boolean;
  Persoon_Id: string;
  Persoon: Person;
};
