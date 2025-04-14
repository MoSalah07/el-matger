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
}
