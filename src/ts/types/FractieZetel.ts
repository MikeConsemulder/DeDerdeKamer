import type { Fractie } from "./Fractie";

export type FractieZetel = {
  Id: string;
  Gewicht: number;
  Fractie_Id: string;
  GewijzigdOp: string;
  ApiGewijzigdOp: string;
  Verwijderd: boolean;
  Fractie: Fractie;
};
