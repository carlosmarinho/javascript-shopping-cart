class Goods {
  name;
  importDutyTax = 0;
  basicSalesTax = 10;
  imported = false;
  price;

  constructor(description) {
    const descArray = description.split(" at ");
    this.price = parseFloat(descArray[1]);
    this.name = descArray[0]
    if(description.includes('imported')) {
      this.imported = true;
      this.importDutyTax = 5;
    }
  }

  getTotalTax = () => {
    return (this.importDutyTax*this.price)/100 + (this.price*this.basicSalesTax)/100
  }

  getFinalPrice = () => {
    return this.price + this.getTotalTax();
  }
}

export default Goods;