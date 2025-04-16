import { ICartProduct } from "@/interfaces";

interface ICartItem {
  cartItem: ICartProduct;
  shoppingCartItems: ICartProduct[];
}

export const addItemToShoppingCart = ({
  cartItem = {} as ICartProduct,
  shoppingCartItems = [],
}: ICartItem) => {
  const isExisting = shoppingCartItems.find((item) => item.id === cartItem.id);
  if (isExisting) {
    return shoppingCartItems.map((item) =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...shoppingCartItems, { ...cartItem, quantity: 1 }];
};

export const addItemToStore = (item: ICartProduct) => {
  return {
    brand: item.brand,
    category: item.category,
    colors: item.colors,
    countInStock: item.countInStock,
    description: item.description,
    id: item.id,
    images: item.images,
    isPublished: item.isPublished,
    listPrice: item.listPrice,
    name: item.name,
    numSales: item.numSales,
    price: item.price,
    quantity: item.quantity,
    sizes: item.sizes,
    slug: item.slug,
    tags: item.tags,
  };
};

// /Local Storage

export const getCartFromLocalStorage = (): ICartProduct[] => {
  try {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return [];
  }
};

export const saveCartToLocalStorage = (cart: ICartProduct[]) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};
