export interface IProduct {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  brand: string;
  category: string;
  price: number;
  listPrice: number;
  countInStock: number;
  isPublished: boolean;
  images: string[];
  colors: string[];
  sizes: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  numSales: number;
  quantity: number;
}

export type ICartProduct = Omit<IProduct, "createdAt" | "updatedAt">;

export interface OrderItem extends ICartProduct {
  clientId: string;
  size: string;
  color: string;
  image: string;
}
