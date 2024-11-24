export interface SpaceFormData {
  name: string;
  location: string;
  openingTime: string;
  closingTime: string;
  capacity: number | string;
  image: File | null;
}
