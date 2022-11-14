import Goods from './Goods.js';
class Musical extends Goods {
  toString = () => {
    return this.name || 'Music';
  }
}

export default Musical;