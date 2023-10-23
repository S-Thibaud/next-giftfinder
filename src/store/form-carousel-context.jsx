import { createContext } from 'react';

export const FormCarouselContext = createContext({
  age: 0,
  gender: null,
  category: [],
  price: {
    min: 0,
    max: 250,
  },
});
