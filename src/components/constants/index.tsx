interface NavigationInterface {
  title: string;
  pathname: string;
  scrollOffset?: number;
}

export const navigationLinks: Array<NavigationInterface> = [
  { title: "What we do", pathname: "what-we-do", scrollOffset: -50 },
  { title: "SchoolMoni", pathname: "/schoolmoni", scrollOffset: -70 },
  { title: "About us", pathname: "/aboutUs", scrollOffset: -70 },
  { title: "Our Impact", pathname: "/", scrollOffset: -100 },
  { title: "How it works", pathname: "/", scrollOffset: -40 },
];
