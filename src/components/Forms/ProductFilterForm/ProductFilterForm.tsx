import React, { useState } from 'react';
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
import { FormCarouselContext } from '../../../store/form-carousel-context';

interface FormData {
  age?: number;
  gender?: string;
  category?: string;
  price?: number;
}

const ProductFilterForm: React.FC = () => {
  const [formData, setFormData] = useState({}); // Store form data in state

  // Function to handle form submission and send data to the backend API
  const handleFormSubmit = (data: FormData) => {
    console.log(data);
    // Send a POST request to your backend API with the form data
    // fetch('/api/products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data), // Convert form data to JSON
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // Handle a successful API response, e.g., show a success message
    //     } else {
    //       // Handle errors, e.g., show an error message
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle network errors or exceptions
    //   });
  };

  return (
    <div className="w-70 mx-15 bg-grey rounded-5  rounded-xl overflow-x-hidden">
      <Wrapper>
        <div>
          {/* <h1>Form Carousel Demo</h1>
          <h4>Instructions ...</h4> */}

          <FormCarouselContext.Provider
            value={{
              age: 0,
              gender: null,
              category: [],
              price: {
                min: 0,
                max: 250,
              },
            }}
          >
            <FormCarousel
              stages={[
                {
                  form: Age,
                  icon: <Calendar size={20} />,
                  label: 'Your Age',
                },
                {
                  form: Gender,
                  icon: <PersonStanding size={24} />,
                  label: 'Your Gender',
                },
                {
                  form: Category,
                  icon: <LayoutTemplate size={24} />,
                  label: 'Category',
                },
                {
                  form: Price,
                  icon: <Euro />,
                  label: 'Price',
                },
              ]}
              onFormSubmit={handleFormSubmit}
            />
          </FormCarouselContext.Provider>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductFilterForm;
