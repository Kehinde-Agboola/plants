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

export const slide = [
  "./src/assets/plants/p1.svg",
  "./src/assets/plants/p2.svg",
  "./src/assets/plants/p3.svg",
  "./src/assets/plants/p4.svg",
  "./src/assets/plants/p2.svg",
  "./src/assets/plants/p6.svg",
  "./src/assets/plants/p7.svg",
  "./src/assets/plants/p2.svg",
  "./src/assets/plants/p1.svg",
  "./src/assets/plants/p6.svg",
  "./src/assets/plants/p7.svg",
];
