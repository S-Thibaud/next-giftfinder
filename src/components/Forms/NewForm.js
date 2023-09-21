import React from 'react';
import FormCarousel from './FormCarousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCopy,
//   faEnvelope,
//   faPenAlt,
// } from '@fortawesome/free-solid-svg-icons';
import Bio from './Bio';
import Details from './Details';
import Age from './Age';
import Gender from './Gender';
import Category from './Category';
import Price from './Price';
import { Wrapper } from './FormCarousel/Wrapper';
import { Calendar, PersonStanding } from 'lucide-react';

const NewForm = () => {
  return (
    // <div className="w-70 mx-15 bg-grey rounded-5 overflow-hidden rounded-xl">
      <Wrapper>
        <div>
          {/* <h1>Form Carousel Demo</h1>
          <h4>Fill out your details below to complete the form.</h4> */}

          <FormCarousel
            stages={[
              {
                form: Age,
                // icon: <Calendar size={24}/>,
                label: 'Your Age',
              },
              {
                form: Gender,
                // icon: <PersonStanding size={24}/>,
                label: 'Your Gender',
              },
              {
                form: Category,
                // icon: <PersonStanding size={24}/>,
                label: 'Category',
              },
              {
                form: Price,
                // icon: <FontAwesomeIcon icon={faEnvelope} />,
                label: 'Price',
              },
              // {
              //   form: Details,
              //   icon: <FontAwesomeIcon icon={faCopy} />,
              //   label: 'Your Details',
              // },
              // {
              //   form: Bio,
              //   icon: <FontAwesomeIcon icon={faPenAlt} />,
              //   label: 'Bio',
              // },
            ]}
          />
        </div>
      </Wrapper>
    // </div>
  );
};

export default NewForm;
