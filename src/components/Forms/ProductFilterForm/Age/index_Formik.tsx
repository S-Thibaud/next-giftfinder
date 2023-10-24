import React from 'react';
import { useFormik, useFormikContext } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormCarousel_Form, Form_Age } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';

const Age: React.FC<FormCarousel_Form> = (props) => {
  const formik = useFormikContext<Form_Age>();

  const handleSubmit = (values: any) => {
    console.log(values);
    formik.setFieldValue('age', values.age);
    props.setCompleted(props.index, true);
    props.toggleStage(props.index + 1);
  };

  return (
    <Stage transition={props.transition}>
      <div className="wrap">
        <Formik initialValues={{ age: 0 }} onSubmit={handleSubmit}>
          <Form onSubmit={handleSubmit}>
            <h3>Please provide your age</h3>
            <Field
              className="textbox"
              type="number"
              name="age"
              placeholder="Age"
            />
            <p className="error">
              <ErrorMessage name="age" />
            </p>

            <input className="textbox submit" type="submit" value="Continue" />
          </Form>
        </Formik>
      </div>
    </Stage>
  );
};

export default Age;
