// Db Data
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

// Store Data
// export type ICartProduct = Omit<IProduct, "createdAt" | "updatedAt">;
export interface ICartProduct {
  id: string;
  clientId: string;
  name: string;
  slug: string;
  description: string | null;
  brand: string;
  category: string;
  price: number;
  listPrice: number;
  countInStock: number;
  isPublished: boolean;
  numSales: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
  tags: string[];
}
