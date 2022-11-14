import Goods from './Goods.js';
class Food extends Goods {

  constructor(description) {
    super(description);
    this.basicSalesTax = 0;
  }

  toString = () => {
    return this.name || 'food';
  }
}

export default Food;