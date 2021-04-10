import { IDLE_TIME } from './constants';
import { Fruit, SaleStatus } from './interfaces';
import { ShoppingList2 } from './shopping-list';

const myListOnTS = new ShoppingList2();

const newFruit: Fruit<SaleStatus> = {
  id: 'hola como estas',
  name: 'mango',
  color: 'verde',
  status: true,
  saleStatus: {
    marked: 'VIP',
    stock: true
  }
};

IDLE_TIME; // ?

myListOnTS.addItem(newFruit);

myListOnTS.removeItem(newFruit);

myListOnTS.groceries; // ?
