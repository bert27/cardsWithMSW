export interface ResponseInteface {
  electrics: CardBikeInterface[];
  olds: CardBikeInterface[];
  bikes: CardBikeInterface[];
}

export interface CardBikeInterface {
  id: number;
  name: string;
  type: string;
  image: string;
  description: string;
}
