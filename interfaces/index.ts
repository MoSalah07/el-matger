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
}

export interface OrderItem {
  clientId: string;
  product: string;
  name: string;
  slug: string;
  category: string;
  quantity: number;
  countInStock: number;
  image: string;
  price: number;
  size?: string | undefined;
  color?: string | undefined;
}
