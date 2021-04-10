/* eslint-disable import/prefer-default-export */
import { Fruit, SaleStatus } from './interfaces';

// import * as IN from './interfaces';

export class ShoppingList2 {
  groceries: Fruit<SaleStatus>[];
  // groceries: IN.Fruit<IN.SaleStatus>[];
  // groceries2: Array<string>;

  constructor() {
    this.init();
  }

  init() {
    this.groceries = [];
  }

  addItem(fruit: Fruit<SaleStatus>) {
    this.groceries = [...this.groceries, fruit];
  }

  removeItem(fruit: Fruit<SaleStatus>) {
    this.groceries = this.groceries.filter((item) => fruit !== item);
  }
}
