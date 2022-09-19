export type product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    count: number;
    rate: number;
  };
};

export type CartProduct = {
  qty: number;
  product: product;
};
