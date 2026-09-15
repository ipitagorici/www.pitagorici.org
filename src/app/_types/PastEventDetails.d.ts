import { Photo } from "./Photo"
import { PastEvent } from "./PastEvent";
import { Photographer } from "./Photographer";

export type PastEventDetails = PastEvent & {
  videoYT: string;
  descrizione: string;
  foto: {
    crediti: Photographer[],
    immagini: Photo[]
  };
}