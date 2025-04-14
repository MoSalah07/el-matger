"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ImageHover({
  src,
  hoverSrc,
  alt,
}: {
  src: string;
  hoverSrc: string;
  alt: string;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  let hoverTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  };

  return (
    <div
      className="relative h-52"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="80vw"
        className={`object-contain transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={hoverSrc}
        alt={alt}
        fill
        sizes="80vw"
        className={`absolute inset-0 object-contain transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
