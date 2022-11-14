# Shopping Cart(Baskets)

  - The application was developed with pure javascript, the only external package used was Jest to run the test.

# Structure, Technologies and patterns used

## Structure of project.

  - The main folder is the app folder where we have our SingletonCart '/app/SingletonCart.js', createFactoryGoods '/app/createFactoryGood.js' function and our models(it's basically the products or goods) at '/app/models', and we have our folder '/__test__' where is located our test.

## Installing and running the application

  - Clone the application from https://github.com/carlosmarinho/filmes-api-node.git
    ```
    git clone https://github.com/carlosmarinho/filmes-api-node.git
    ```

  - To start the project you can simple run 'node index.js' or 'npm run start' in the root folder of the app
  ```
  npm run start
  ```
  
  - Run npm run test to run the existent test
  ```
  npm run test
  ```

  - Run npm run test:watch to run the existent test in watch mode
  ```
  npm run test:watch
  ```

## Technologies

  - Javascript
  - Jest

## Patterns

  - Singleton: The application uses the Singleton pattern to assure that we are going to have only one cart for the whole application.
  - Factory: Used to help on the creation of the products(goods), where we have only one place that is responsible for the creation of the products.

# Test

  - We are using Jest for test, and they are located in the /__test__ folder. I didn't have enough time to do all the test that I wanted, so I'm adding it in the @todo section

  - Run npm run test to run the existent test
  ```
  npm run test
  ```

  - Run npm run test:watch to run the existent test in watch mode
  ```
  npm run test:watch
  ```

# @TODO

## @todo Test
  
  - As I mentioned above, cause the lack of time I couldn't implement all the test. 
  
## @todo Refactor
  
  - Move validation from the file index.js (It was easier and faster, cause it's validated same time as user input the lines on prompt) to SingletonCart.js that is the class that should have this responsability, or a better approach is to create a class that would be called from the SingletonCart class(with this approach we wouldn't break the SRP- from SOLID),  