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

export interface PropertyFace {
  id: number;
  coverPhoto: ImageUrl;
  streetNumber: number;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  propertytype: string;
  units: number;
  price: number;
  initialloan: number;
  marketvalue: number;
  loanpayment: number;
  propertytax: number;
  rent1: number;
  rent2: number;
  rent3: number;
  rent4: number;
}
