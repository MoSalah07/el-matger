"use client";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/interfaces";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SelectVariant({ product }: { product: IProduct }) {
  const searchParams = useSearchParams();
  const selectedColor = searchParams.get("color") || product.colors[0];
  const selectedSize = searchParams.get("size") || product.sizes[0];

  return (
    <>
      {product.colors.length > 0 && (
        <div className="space-x-2 space-y-2">
          <div className="">Color:</div>
          {product.colors.map((color) => (
            <Button
              asChild
              variant="outline"
              key={color}
              style={{
                borderWidth: "1px",
                borderColor:
                  selectedColor === color ? "var(--primary)" : "transparent",
              }}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: color,
                  size: selectedSize,
                })}`}
              >
                <div
                  style={{ backgroundColor: color }}
                  className="h-4 w-4 rounded-full border border-muted-foreground"
                ></div>
                {color}
              </Link>
            </Button>
          ))}
        </div>
      )}

      {product.sizes.length > 0 && (
        <div className="mt-2 space-x-2 space-y-2">
          <div>Size:</div>
          {product.sizes.map((size) => (
            <Button
              asChild
              variant="outline"
              style={{
                borderWidth: "1px",
                borderColor:
                  selectedSize === size ? "var(--primary)" : "transparent",
              }}
              key={size}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: selectedColor,
                  size: size,
                })}`}
              >
                {size}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  );
}
