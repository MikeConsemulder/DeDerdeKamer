import type { FractieZetel } from "./FractieZetel";

export type FractieZetelPersoon = {
  Id: string;
  FractieZetel_Id: string;
  Persoon_Id: string;
  Functie: string;
  Van: string;
  TotEnMet: string;
  GewijzigdOp: string;
  ApiGewijzigdOp: string;
  Verwijderd: false;
  FractieZetel: FractieZetel;
};
