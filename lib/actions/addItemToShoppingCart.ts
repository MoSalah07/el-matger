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

export const addItemToStore = (item: ICartProduct): ICartProduct => {
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
