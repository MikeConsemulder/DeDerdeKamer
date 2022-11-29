import type { Person } from "./Person";

export type PersoonReis = {
  Id: string | null;
  Doel: string | null;
  Bestemming: string | null;
  Van: string | null;
  TotEnMet: string | null;
  BetaaldDoor: string | null;
  Gewicht: number | null;
  GewijzigdOp: string | null;
  ApiGewijzigdOp: string | null;
  Verwijderd: boolean | null;
  Persoon_Id: string | null;
  Persoon: Person;
};
