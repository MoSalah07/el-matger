"use server";
import { IProduct } from "@/interfaces";
import { withErrorHandling } from "@/lib/withErrorHandling";
import { PrismaClient } from "@prisma/client";

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
