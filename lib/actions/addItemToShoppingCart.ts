import { ICartProduct } from "@/interfaces";
import { generateId } from "../utils";

interface ICartItem {
  cartItem: ICartProduct;
  shoppingCartItems: ICartProduct[];
  quantity: number;
}

export const addItemToShoppingCart = ({
  cartItem = {} as ICartProduct,
  shoppingCartItems = [],
  quantity = 1,
}: ICartItem) => {
  const isExisting = shoppingCartItems.find((item) => item.id === cartItem.id);
  if (isExisting) {
    return shoppingCartItems.map((item) =>
      item.id === cartItem.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  return [...shoppingCartItems, { ...cartItem, quantity }];
};

export const addItemToStore = (item: ICartProduct): ICartProduct => {
  return {
    brand: item.brand,
    clientId: generateId(),
    category: item.category,
    color: item.color,
    countInStock: item.countInStock,
    description: item.description,
    id: item.id,
    image: item.image,
    isPublished: item.isPublished,
    listPrice: item.listPrice,
    name: item.name,
    numSales: item.numSales,
    price: item.price,
    quantity: item.quantity,
    size: item.size,
    slug: item.slug,
    tags: item.tags,
  };
};

export const countProducts = ({
  cartProducts,
}: {
  cartProducts: ICartProduct[];
}) => {
  return cartProducts.reduce((acc, item) => acc + item.quantity, 0);
};

export const totalPriceProducts = ({
  cartProducts,
}: {
  cartProducts: ICartProduct[];
}): number => {
  return cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
};
