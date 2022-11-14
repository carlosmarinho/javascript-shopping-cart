import readline from 'readline';
import Cart from './app/SingletonCart.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\nInsert your product and prices and press ENTER to enter next product and CTRL+c to finish." +
"\n\nExample: 2 book at 12.49 \n\n*********************************\n  Press 'CTRL+C' - to Finish\n  Press 'ENTER' - to Continue\n\n"+
"\n*********************************\n\nObs.: Remember to press ENTER before CTRL+c to submit your product \n\n ");

let input = [];
let cart;

rl.prompt();  
rl.on('line', function(line) {      
  if(validateLine(line)) {
    input.push(line);
  }
  else {
    console.error("Your last input isn't valid! Please try again\n")
  }
  rl.prompt();
}).on('close', function() {
  console.log("\n");
  cart = new Cart();
  cart.addProducts(input);
  cart.displayCart();

  process.exit(0);
});
