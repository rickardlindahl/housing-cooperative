export const metadata = {
  title: "Housing Cooperative",
  description: "Housing Cooperative, located somewhere on earth.",
};

export type Metadata = typeof metadata;

export const mainNav = [
  {
    title: "Home",
    href: "/",
    disabled: false,
  },
  {
    title: "Posts",
    href: "/posts",
    disabled: true,
  },
  {
    title: "Documents",
    href: "/documents",
    disabled: true,
  },
  {
    title: "Address list",
    href: "/address-list",
    disabled: true,
  },
];
export type MainNavItem = (typeof mainNav)[number];
