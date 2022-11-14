import Goods from './Goods.js';
class Medical extends Goods {

  constructor(description) {
    super(description);
    this.basicSalesTax = 0;
  }

  toString = () => {
    return this.name || 'medical';
  }
}

export default Medical;