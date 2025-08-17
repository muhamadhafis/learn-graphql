const books = [
  {
    id: 1,
    title: "Spiderman No Way Home",
    author: "Sam Raimi",
    publish_at: "2021-12-15",
    category: "Action",
    price: 500,
  },
  {
    id: 2,
    title: "Spiderman Far From Home",
    author: "Sam Raimi",
    publish_at: "2021-12-15",
    category: "Action",
    price: 500,
  },
];

const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    verified: true,
  },
  {
    id: 2,
    name: "Jessica",
    email: "jane@example.com",
    verified: false,
  },
  {
    id: 3,
    name: "Ronald",
    email: "john@example.com",
    verified: true,
  },
  {
    id: 4,
    name: "Jane",
    email: "jane@example.com",
    verified: false,
  },
];

const products = [
  {
    id: 1,
    name: "AC Dimmer 300W",
    stock: 10,
    location: "Warehouse",
    sku: "1A1A1",
    bundle: 100,
    unit: "pcs",
  },
  {
    id: 2,
    name: "AC Dimmer 100W",
    stock: 50,
    location: "Warehouse",
    sku: "1A1A2",
    bundle: 100,
    unit: "pcs",
  },
  {
    id: 3,
    name: "AC Dimmer 200W",
    stock: 20,
    location: "Warehouse",
    sku: "1A1A3",
    bundle: 100,
    unit: "pcs",
  },
  {
    id: 4,
    name: "Thermal Memory Gray",
    stock: 70,
    location: "Store",
    sku: "1A1",
    bundle: 1,
    unit: "pcs",
  },
  {
    id: 5,
    name: "Thermal Memory Black",
    stock: 50,
    location: "Store",
    sku: "1A2",
    bundle: 1,
    unit: "pcs",
  },
];

const lendings = [
  {
    id: 4,
    book_id: 1,
    member_id: 1,
    borrowed_at: "2021-12-15",
    returned_at: "2021-12-16",
  },
  {
    id: 5,
    book_id: 2,
    member_id: 2,
    borrowed_at: "2021-12-15",
    returned_at: "2021-12-16",
  },
  {
    id: 6,
    book_id: 1,
    member_id: 3,
    borrowed_at: "2021-12-15",
    returned_at: "2021-12-16",
  },
  {
    id: 7,
    book_id: 2,
    member_id: 4,
    borrowed_at: "2021-12-15",
    returned_at: "2021-12-16",
  },
];

export { books, members, products, lendings };
