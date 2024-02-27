const user = { id: 1, name: "Shawon Islam", job: "Developer" };

// console.log(user);
//Javascript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  owner: "Alia",
  address: {
    street: "Mumbai Street",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  products: ["Shoes", "Shirts", "Pants"],
  revenue: 50000,
  isOpen: true,
  isNew: false,
};
console.log(shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);
console.log(typeof shopJson);

const myParse = JSON.parse(shopJson);
console.log(myParse);
