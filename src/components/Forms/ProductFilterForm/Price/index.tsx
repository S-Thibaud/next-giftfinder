import React, { useState } from 'react';
import { withFormik, FormikProps, Form } from 'formik';
import { FormCarousel_Form, Form_Price } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const PriceForm: React.FC<FormCarousel_Form & FormikProps<Form_Price>> = (
  props
) => {
  const [value, setValue] = useState<[number, number]>([0, 250]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as [number, number]);
  };

  return (
    <Stage transition={props.transition}>
      <div className="wrap">
        <Form>
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
          <input className="textbox submit" type="submit" value="Submit" />
        </Form>
      </div>
    </Stage>
  );
};

const Price = withFormik<FormCarousel_Form, Form_Price>({
  mapPropsToValues: (props) => {
    return {
      price: 0,
    };
  },

  // validate: (values: Form_Price) => {
  //   let errors: FormikErrors<any> = {};
  //   if (values.price > 0) { // not okay
  //     errors['price'] = 'Please accept the terms of service';
  //   }
  //   return errors;
  // },

  handleSubmit: (values, formikBag) => {
    formikBag.props.setCompleted(formikBag.props.index, true);
  },
})(PriceForm);

export default Price;
