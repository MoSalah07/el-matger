import Image from "next/image";
import React from "react";
import LogoImage from "@/public/logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={`/`} className="flex items-center justify-center bg-red-500">
      <Image src={LogoImage} alt="Logo" width={60} height={60} />
    </Link>
  );
}
