const getFullYear = new Date().getFullYear();

export const data: {
  site: {
    name: string;
    description: string;
    keywords: string;
    url: string;
    logo: string;
    slogan: string;
    author: string;
    copyright: string;
    email: string;
    address: string;
    phone: string;
    portfolio: string;
  };
} = {
  site: {
    name: "NxtAmzn",
    description:
      "NxtAmzn is a sample Ecommerce website built with Next.js, Tailwind CSS, and MongoDB.",
    keywords: "Next Ecommerce, Next.js, Tailwind CSS, MongoDB",
    url: "https://next-mongo-ecommerce-final.vercel.app",
    logo: "/icons/logo.svg",
    slogan: "Spend less, enjoy more.",
    author: "Next Ecommerce",
    copyright: `2000-${getFullYear}, El-Matger-Ecommerce.com, Inc. or its affiliates`,
    email: "admin@example.com",
    address: "123, Main Street, Cairo, EG, Zip 12345",
    phone: "+1 (123) 456-7890",
    portfolio: "https://portfolio-seven-lake-26.vercel.app/",
  },
};
