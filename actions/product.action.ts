"use server";
import { IProduct } from "@/interfaces";
import { IProductSearchParamsAction } from "@/interfaces/interfaces.action";
import { withErrorHandling } from "@/lib/withErrorHandling";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  const result = await prisma.product.findMany();
  return result;
};

export const getProductsByTag = async ({
  tage,
  limit = 10,
}: {
  tage: string | null;
  limit?: number;
}): Promise<[IProduct[] | null, Error | null]> => {
  return await withErrorHandling(async () => {
    return await prisma.product.findMany({
      where: {
        tags: {
          has: tage,
        },
        isPublished: true,
      },
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  });
};

export const getProductsForCard = async ({
  tag,
  limit = 4,
}: {
  tag: string;
  limit?: number;
}): Promise<{ name: string; href: string; image: string }[]> => {
  try {
    const products = await prisma.product.findMany({
      where: {
        tags: {
          has: tag,
        },
        isPublished: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
      select: {
        name: true,
        slug: true,
        images: true,
      },
    });

    return products.map((product) => ({
      name: product.name,
      href: `/product/${product.slug}`,
      image: product.images?.[0] ?? "",
    }));
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error("Unknown error");
    console.error("getProductsForCard error:", error.message);
    return [];
  }
};

export const getAllCategories = async (): Promise<string[]> => {
  try {
    const categories = await prisma.product.findMany({
      where: {
        isPublished: true,
      },
      distinct: ["category"],
      select: {
        category: true,
      },
    });

    return categories.map((item) => item.category).filter(Boolean);
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    throw new Error("Failed to fetch categories");
  }
};

export const getAllProductsBySearchParams = async ({
  query,
  limit,
  page,
  category,
  tag,
  price,
  sort,
}: IProductSearchParamsAction): Promise<{
  products: IProduct[];
  totalProducts: number;
  totalPages: number;
  from: number;
  to: number;
}> => {
  try {
    limit = limit || 9;
    const skip = (page - 1) * limit;
    // Filter
    const filters: Prisma.ProductWhereInput = {
      isPublished: true,
      // Query
      ...(query && query !== "all"
        ? {
            name: {
              contains: query,
              mode: "insensitive",
            },
          }
        : {}),
      // Category
      ...(category && category !== "all" ? { category } : {}),
      // Tag
      ...(tag && tag !== "all" ? { tags: { has: tag } } : {}),
      // Price
      ...(price && price !== "all"
        ? {
            price: {
              gte: Number(price.split("-")[0]),
              lte: Number(price.split("-")[1]),
            },
          }
        : {}),
    };
    // Sorting
    const orderBy: Prisma.ProductOrderByWithRelationInput =
      sort === "best-selling"
        ? { numSales: "desc" }
        : sort === "price-low-to-high"
        ? { price: "asc" }
        : sort === "price-high-to-low"
        ? { price: "desc" }
        : { id: "desc" };

    //  get Product & countProducts
    const [products, countProducts] = await Promise.all([
      prisma.product.findMany({
        where: filters,
        orderBy,
        take: limit,
        skip,
      }),
      prisma.product.count({
        where: filters,
      }),
    ]);

    return {
      products,
      totalPages: Math.ceil(countProducts / limit),
      totalProducts: countProducts,
      from: skip + 1,
      to: skip + products.length,
    };
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    throw new Error("Failed to fetch categories");
  }
};

export const getAllTags = async (): Promise<string[]> => {
  const products = await prisma.product.findMany({
    select: {
      tags: true,
    },
  });

  const tagSet = new Set<string>();
  for (const product of products) {
    product.tags?.forEach((tag) => tagSet.add(tag));
  }

  return Array.from(tagSet)
    .sort((a, b) => a.localeCompare(b))
    .map((x) =>
      x
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
};

export const getProductBySlug = async (slug: string): Promise<IProduct> => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        slug,
        isPublished: true,
      },
      select: {
        brand: true,
        category: true,
        colors: true,
        countInStock: true,
        description: true,
        id: true,
        images: true,
        isPublished: true,
        listPrice: true,
        name: true,
        numSales: true,
        price: true,
        quantity: true,
        sizes: true,
        slug: true,
        tags: true,
      },
    });
    if (!product) throw new Error("Product not found");
    return product as IProduct;
  } catch (err) {
    console.error("Failed to fetch slug:", err);
    throw new Error("Failed to fetch slug");
  }
};
