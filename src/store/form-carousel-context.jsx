import { createContext } from 'react';

export const FormCarouselContext = createContext({
  age: 0,
  gender: '',
  category: [],
  price: {
    min: 0,
    max: 250,
  },
});
