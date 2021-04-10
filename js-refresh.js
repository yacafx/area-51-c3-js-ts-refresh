function ShoppingList() {
  this.groceries = [];
};

ShoppingList.prototype.addItem = function (item) {
  this.groceries = this.groceries.concat([item]);
};

ShoppingList.prototype.removeItem = function (item) {
  this.groceries = this.groceries.filter(function(grocery){
      return item !== grocery;
  })
};


const myList = new ShoppingList();

myList.addItem('Banana');
myList.addItem('Granadilla');
myList.addItem('Mango');

myList.removeItem('granadilla')

myList.groceries; // ?