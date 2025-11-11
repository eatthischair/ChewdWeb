export type Coords = { lat: number; lng: number };

export interface Review {
  Comments: string;
  coords: Coords | null;
  createdAt?: {
    __time__: string; // stored as ISO string
  };
  dishes: Dish[];
  favorite: boolean;
  placeId: string;
  placeName: string;
  ratings: {
    label: string;
    value: number;
  }[];
  tags?: string[];
  username: string | null;
}
export type Reviews = Review[];

export interface YetToVisit {
  coords: Coords;
  placeId: string;
  placeName: string;
  username: string | null;
}
export type Yets = YetToVisit[];

interface Dish {
  comments: string;
  name: string;
  ratings: {
    label: string;
    value: number;
  };
}

export interface User {
  email: string;
  followers: string[];
  following: string[];
  username: string;
  firstName?: string;
  lastName?: string;
  profileVisbility?: string;
}
