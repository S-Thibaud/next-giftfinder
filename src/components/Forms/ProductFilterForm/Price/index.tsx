import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
import Stage from '../FormCarousel/Stage';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { FormCarouselContext } from '@/store/form-carousel-context';
import { FormCarousel_Form, Form_Price } from '../FormCarousel/types';

const PriceForm: React.FC<FormCarousel_Form> = ({index, transition, setCompleted, submitCarousel}) => {
  const formCarouselCtx = useContext(FormCarouselContext);

  const [value, setValue] = useState([0, 250]);
  
  const handleSubmit = (values: Form_Price) => {
    formCarouselCtx.price.min = value[0];
    formCarouselCtx.price.max = value[1];
    setCompleted(index, true);



    // console.log("1234test");
    ;
  };

  // useEffect(() => {
  //     submitCarousel();
  // }, [submitCarousel]);

  

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as [number, number]);
  };

  return (
    <Formik
      initialValues={{ price: 0 }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Stage transition={transition}>
          <div className="wrap">
            <h3>Please select a price range</h3>
            <div>
              <Typography id="slider-label" gutterBottom>
                Value: €{value[0]} - €{value[1]}
              </Typography>
              <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={250}
                valueLabelFormat={(value) => value.toString()}
                aria-labelledby="range-slider"
                className="w-96"
              />
            </div>
              <ErrorMessage name="price" component="div" className="error" />
            <button type="submit" className="textbox submit">Submit</button>
          </div>
        </Stage>
      </Form>
    </Formik>
  );
};

export default PriceForm;
