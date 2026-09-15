import { Photo } from "./Photo"
import { Location } from "./Location";

export type PastEvent = {
  id: number;
  nome: string;
  data: string;
  sottotitolo: string;
  localita: Location;
  cover?: Photo;
}