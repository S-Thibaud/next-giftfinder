import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormCarousel_Form, Form_Gender } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';



const GenderForm: React.FC<FormCarousel_Form> = (props) => {
  const initialValues = {
    gender: '',
  };
  
  const handleSubmit = (values: Form_Gender) => {
    console.log(props.index);
    props.setCompleted(props.index, true);
    props.toggleStage(props.index + 1);
  };

  return (
    <Stage transition={props.transition}>
      <div className="wrap">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <GenderFormContent />
        </Formik>
      </div>
    </Stage>
  );
};

const GenderFormContent = () => (
  <Form>
    <div
      role="group"
      aria-labelledby="my-radio-group"
      className="flex flex-col items-center"
    >
      <div className="flex flex-col items-start">
        <h3>Please select your gender</h3>
        <label className="flex space-x-2">
          <Field
            type="radio"
            name="gender"
            value="Male"
            className="form-radio h-5 w-5 text-indigo-600"
          />
          <span>Male</span>
        </label>
        <label className="flex items-start space-x-2">
          <Field
            type="radio"
            name="gender"
            value="Female"
            className="form-radio h-5 w-5 text-indigo-600"
          />
          <span>Female</span>
        </label>
        <label className="flex items-center space-x-2">
          <Field
            type="radio"
            name="gender"
            value="X"
            className="form-radio h-5 w-5 text-indigo-600"
          />
          <span>X</span>
        </label>
      </div>
    </div>

    <p className="error">
      <ErrorMessage name="gender" />
    </p>

    <button className='textbox submit' type="submit">Continue</button>
  </Form>
);

export default GenderForm;
