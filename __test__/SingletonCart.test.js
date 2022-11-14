import Cart from '../app/SingletonCart.js';
//Need to import jest, cause when I was trying to mock I gotta an error saying the jest was undefined
import {jest} from '@jest/globals'

// Couldn't mock like this, gotta an error 'ReferenceError: require is not defined'
// jest.mock('../app/SingletonCart.js');

//Couldn't simple mock as above need to do this mock here
const displayCartItemsMock = jest
  .spyOn(Cart.prototype, 'displayCartItems')
  .mockImplementation(() => {})

//Couldn't simple mock as above need to do this mock here
const displayTotalTaxMock = jest
  .spyOn(Cart.prototype, 'displayTotalTax')
  .mockImplementation(() => {})

//Couldn't simple mock as above need to do this mock here
const displayTotalMock = jest
  .spyOn(Cart.prototype, 'displayTotal')
  .mockImplementation(() => {})

const mockInput = [
  '2 book at 12.49',
  '1 music CD at 14.99',
  '1 chocolate bar at 0.85'
];

describe("Singleton Cart", () => {
  const cartGlobal = new Cart();
  beforeEach(() => {
    //It guarantee that I have only one cart per test
    cartGlobal.destroy();
  });

  it("should test Singleton cart, to have only one cart for the whole application", () => {
    const cart = new Cart();  
    cart.addProducts(mockInput)
    expect(cart.items.length).toBe(3);

    //Although I create another instance of cart it should refer to the same cart
    const cart2 = new Cart();  
    cart.addProducts(mockInput)
    expect(cart.items.length).toBe(6);
    expect(cart2.items.length).toBe(6);
  })

  it("should add an array of products into array items", () => {
    const cart = new Cart();  
    cart.addProducts(mockInput)

    expect(cart.items.length).toBe(3);
  });

  it("should add an array of products and calculate the total tax and total price", () => {
    const cart = new Cart();
    cart.addProducts(mockInput)

    expect(cart.total).toBe(42.319);
    expect(cart.totalTax).toBe(1.5);
  });

  it("should check if displayCart call displayCartItems, displayTotalTax, displayTotal", () => {

    const cart = new Cart();
    cart.addProducts(mockInput);
    cart.displayCart();

    expect(displayCartItemsMock).toBeCalled();
    expect(displayTotalTaxMock).toBeCalled();
    expect(displayTotalMock).toBeCalled();
  })
})