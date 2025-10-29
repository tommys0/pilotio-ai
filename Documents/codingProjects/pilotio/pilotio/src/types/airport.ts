export interface Airport {
  id: string;
  name: string | null;
  "gps-code": string | null;
  municipality: string | null;
  code: string | null;
  long: number;
  lat: number;
  elevation: string | null;
  image: string;
}
