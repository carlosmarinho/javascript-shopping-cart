import { createFactory } from './createFactoryGoods.js';

class Cart{
  items = [];
  total = 0;
  totalTax = 0;

  constructor() {
    //Guarantee that I have only one instance of my Cart in the whole application
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }

  destroy() {
    this.constructor.instance = null;
  }

  addProducts = (input) => {
    let hasImported = false;

    input.forEach(strItem => {
      const {obj: goodInstance, qty} = this.processProductItem(strItem);     
      this.updateTotals(goodInstance, qty);   
      if(goodInstance.imported) 
        hasImported = true;
    })

    this.RoundTotals(hasImported)
  }
  

  displayCart = () => {
    this.displayCartItems();
    this.displayTotalTax();
    this.displayTotal();
  }

  RoundNearest005 = (num) => {
    return Math.round(num * 20) / 20.0;
  }

  //It was arrow function, but was getting error on test need to change to common function
  displayCartItems() {
    this.items.forEach(item => {
      if(item.obj.imported) 
        console.log(`${item.qty} ${item.obj.toString()}: ${this.RoundNearest005(item.obj.getFinalPrice()*item.qty)}`)
      else
        console.log(`${item.qty} ${item.obj.toString()}: ${(item.obj.getFinalPrice()*item.qty)}`)
    })
  }

  //It was arrow function, but was getting error on test need to change to common function
  displayTotalTax() {
    console.log(`Sales Taxes: ${this.totalTax}`)
  }

  //It was arrow function, but was getting error on test need to change to common function
  displayTotal() {
    console.log(`Total: ${this.total.toFixed(2)}`)
  }

  RoundTotals = (hasImported) => {
    this.totalTax = this.RoundNearest005(this.totalTax);
    if(hasImported)
      this.total = this.RoundNearest005(this.total);
  }

  updateTotals = (goodInstance, qty) => {
    this.totalTax += goodInstance.getTotalTax()*qty;
    this.total += goodInstance.getFinalPrice()*qty;
  }

  processProductItem = (strItem) => {
    const itemArr = strItem.split(" ");
    const qty = parseInt(itemArr.shift());
    const goodInstance = createFactory(itemArr.join(" "));
    const item = {qty, obj: goodInstance};
    this.items.push(item);
    return item;
  }
}

export default Cart;