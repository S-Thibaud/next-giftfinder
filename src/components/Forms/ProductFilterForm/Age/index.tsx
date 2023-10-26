import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormCarousel_Form, Form_Age } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';
import { FormCarouselContext } from '@/store/form-carousel-context';

const Age: React.FC<FormCarousel_Form> = (props) => {
  const formCarouselCtx = useContext(FormCarouselContext);

  const initialValues = { age: 0 };

  const validate = (values: Form_Age) => {
    // const errors: Partial<Form_Age> = {};
    // if (!values.age) {
    //   errors.age = 'Please provide an age';
    // }
    // return errors;
  };

  const handleSubmit = (values: Form_Age) => {
    formCarouselCtx.age = values.age;
    props.setCompleted(props.index, true);
    props.toggleStage(props.index + 1);
  };

  return (
    <Stage transition={props.transition}>
      <div className="wrap">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            <h3>Please provide your age</h3>
            <Field
              className="textbox"
              type="number"
              name="age"
              placeholder="Age"
            />
            <ErrorMessage
              name="age"
              render={(msg) => <p className="error">{msg}</p>}
            />

            <button className="textbox submit" type="submit">
              Continue
            </button>
          </Form>
        </Formik>
      </div>
    </Stage>
  );
};

export default Age;
