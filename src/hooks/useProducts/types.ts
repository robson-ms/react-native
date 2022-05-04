type ImageType = {
  url: string;
};

export interface ProductsType {
  id: number;
  name: string;
  price: number;
  image: ImageType;
  isFavorite: boolean;
}
