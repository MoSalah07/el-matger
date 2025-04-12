import React from "react";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className = "", children }: IProps) {
  return (
    <div className={`${className} container mx-auto px-4 w-full h-full`}>
      {children}
    </div>
  );
}
