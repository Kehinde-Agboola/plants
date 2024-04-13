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
interface ImgInterface {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
export const Img: Array<ImgInterface> = [
  {
    id: 1,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p1.svg",
  },
  {
    id: 2,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p2.svg",
  },
  {
    id: 3,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p3.svg",
  },
  {
    id: 4,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p4.svg",
  },
  {
    id: 5,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p5.svg",
  },
  {
    id: 6,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p6.svg",
  },
  {
    id: 7,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p7.svg",
  },
  {
    id: 8,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p8.svg",
  },
  {
    id: 9,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p9.svg",
  },
  {
    id: 10,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p10.svg",
  },

  {
    id: 11,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p11.svg",
  },
  {
    id: 12,
    name: "Book",
    price: 10.99,
    imgUrl: "./src/assets/plants/p12.svg",
  },
];
