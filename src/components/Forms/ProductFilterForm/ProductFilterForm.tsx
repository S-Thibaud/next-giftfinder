import React from 'react';
import FormCarousel from './FormCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faEnvelope,
  faPenAlt,
} from '@fortawesome/free-solid-svg-icons';
import Age from './Age';
import Gender from './Gender';
import Category from './Category';
import Price from './Price';
import { Wrapper } from './FormCarousel/Wrapper';
import { Calendar, Euro, LayoutTemplate, PersonStanding } from 'lucide-react';

const ProductFilterForm: React.FC = () => {
  return (
    <div className="w-70 mx-15 bg-grey rounded-5  rounded-xl overflow-x-hidden">
      <Wrapper>
        <div>
          {/* <h1>Form Carousel Demo</h1>
          <h4>Fill out your details below to complete the form.</h4> */}

          <FormCarousel
            stages={[
              {
                form: Age,
                icon: <Calendar size={20}/>,
                label: 'Your Age',
              },
              {
                form: Gender,
                icon: <PersonStanding size={24}/>,
                label: 'Your Gender',
              },
              {
                form: Category,
                icon: <LayoutTemplate size={24}/>,
                label: 'Category',
              },
              {
                form: Price,
                icon: <Euro />,
                label: 'Price',
              },
            ]}
          />
        </div>
      </Wrapper>
     </div>
  );
};

export default ProductFilterForm;
