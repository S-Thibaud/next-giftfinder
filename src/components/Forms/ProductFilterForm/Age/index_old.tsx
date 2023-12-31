import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field, ErrorMessage } from 'formik';
import { FormCarousel_Form, Form_Age } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';

const AgeForm: React.FC<FormCarousel_Form & FormikProps<Form_Age>> = (props) => {

  return (
    <Stage transition={props.transition}>
      <div className='wrap'>
        <Form>
          <h3>Please provide your age</h3>
          <Field
            className='textbox'
            type='number'
            component='input'
            name="age"
            placeholder="Age"
          />
          <p className="error">
            <ErrorMessage name="age" />
          </p>

          <input
            className='textbox submit'
            type="submit"
            value="Continue"
          />
        </Form>
      </div>
    </Stage>
  );
}

const Age = withFormik<FormCarousel_Form, Form_Age>({
  mapPropsToValues: props => {
    return {
      age: 0,
    };
  },
  validate: (values: Form_Age) => {
    let errors: FormikErrors<any> = {};
    if (!values.age) {
      errors['age'] = 'Please provide an age';
    }
    return errors;
  },
  handleSubmit: (values, formikBag) => {
    
    formikBag.props.setCompleted(formikBag.props.index, true);
    formikBag.props.toggleStage(formikBag.props.index + 1);
  }
})(AgeForm);

export default Age;