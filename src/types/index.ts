export type ImageUrl = string;
// type RoomType = "kitchen" | "bedroom" | "bathroom";

// export enum RoomTypeEnum {
//   Kitchen = "kitchen",
//   Bedroom = "bedroom",
//   Bathroom = "bathroom",
// }

// export interface Room {
//   name: string;
//   type: RoomTypeEnum;
//   width: number;
//   length: number;
// }

export interface PropertyCard {
  coverPhoto: ImageUrl;
  streetNumber: number;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}
