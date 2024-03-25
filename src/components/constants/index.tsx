interface NavigationInterface {
  title: string;
  pathname: string;
  scrollOffset?: number;
}

export const navigationLinks: Array<NavigationInterface> = [
  { title: "Home", pathname: "/", scrollOffset: -50 },
  { title: "Shops", pathname: "/shop", scrollOffset: -70 },
  { title: "About", pathname: "/about", scrollOffset: -70 },
  { title: "Contact", pathname: "/contact", scrollOffset: -100 },
];
