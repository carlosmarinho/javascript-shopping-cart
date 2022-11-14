// import { createFactory } from './Goods.js';
import Book from './models/Book.js';
import Food from './models/Food.js';
import Medical from './models/Medical.js';
import Musical from './models/Musical.js';
import Perfume from './models/Perfume.js';

export const createFactory = (description) => {
  if(description.includes('book'))
      return new Book(description);
  if(description.includes('music CD'))
      return new Musical(description);
  if(description.includes('chocolate'))
      return new Food(description);
  if(description.includes('perfume'))
      return new Perfume(description);
  if(description.includes('pills'))
      return new Medical(description);  
}

