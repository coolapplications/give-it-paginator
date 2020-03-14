import ISeller from "./SellerModel";

export default interface IProduct {
  thumbnail: string;
  title: string;
  vendor: string;
  price: number;
  seller: ISeller;
  id: string;
  permalink: string;
}
