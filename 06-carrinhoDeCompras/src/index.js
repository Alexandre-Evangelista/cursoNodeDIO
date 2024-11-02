import { createItem } from "./services/itens.js";
import { addItem,delItem,removeItem,calculateTotal,displayCart } from "./services/cart.js";

const cart = [];
const myWishCar=[];

console.log('welcomw to the your Shopee cart');
const p1= await createItem('ps5',4000,2);
const p2 = await createItem('blush',80,5)

await addItem(cart,p1);
await addItem(cart,p2);
await displayCart(cart);
await calculateTotal(cart);
await delItem(cart,p2.name);
await removeItem(cart,'ps5')
await displayCart(cart);
await calculateTotal(cart);
