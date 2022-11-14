import Goods from './Goods.js';
class Book extends Goods {

  constructor(description) {
    super(description);
    // super.price = price;
    this.basicSalesTax = 0;
  }

  toString = () => {
    return this.name || 'book';
  }
}

export default Book;