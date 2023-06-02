import type { FractieZetel } from "./FractieZetel";

export type Fractie = {
  Id: string;
  Nummer: number;
  Afkorting: string;
  NaamNL: string;
  NaamEN: string;
  AantalZetels: number;
  AantalStemmen: number;
  DatumActief: string;
  DatumInactief: string;
  ContentType: string;
  ContentLength: number;
  GewijzigdOp: string;
  ApiGewijzigdOp: string;
  Verwijderd: boolean;
  FractieZetel: FractieZetel[];
};
