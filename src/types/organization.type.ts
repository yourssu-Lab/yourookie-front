export interface Organization {
  id: number;
  name: string;
  description: string;
  logoImageUrl: string;
}

export interface Space {
  id: number;
  name: string;
  spaceImageUrl: string;
  location: string;
  openingTime: string;
  closingTime: string;
  capacity: number;
}
