import Goods from './Goods.js';
class Perfume extends Goods {

  toString = () => {
    return this.name || 'perfume';
  }
}

export default Perfume;