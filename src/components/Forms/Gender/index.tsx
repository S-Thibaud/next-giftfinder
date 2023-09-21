import React from 'react';
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import { FormCarousel_Form, Form_Details } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';

const DetailsForm: React.FC<FormCarousel_Form & FormikProps<Form_Details>> = (
  props
) => {
  return (
    <Stage transition={props.transition}>
      <div className="wrap">
        <Form>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="flex flex-col items-center"
          >
            <div className="flex flex-col items-start">
              <label className="flex space-x-2">
                <Field
                  type="radio"
                  name="picked"
                  value="Male"
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span>Male</span>
              </label>
              <label className="flex items-start space-x-2">
                <Field
                  type="radio"
                  name="picked"
                  value="Female"
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <Field
                  type="radio"
                  name="picked"
                  value="X"
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span>X</span>
              </label>
            </div>
          </div>

          {/* <h3>Please select your gender</h3>
          <Field
            className="textbox"
            component="input"
            name="gender"
            placeholder="Gender"
          /> */}
          <p className="error">
            <ErrorMessage name="gender" />
          </p>

          <input className="textbox submit" type="submit" value="Continue" />
        </Form>
      </div>
    </Stage>
  );
};

const Details = withFormik<FormCarousel_Form, Form_Details>({
  mapPropsToValues: (props) => {
    return {
      email: '',
    };
  },
  validate: (values: Form_Details) => {
    let errors: FormikErrors<any> = {};
    if (values.email === '') {
      errors['email'] = 'Please provide an email';
    }
    return errors;
  },
  handleSubmit: (values, formikBag) => {
    formikBag.props.setCompleted(formikBag.props.index, true);
    formikBag.props.toggleStage(formikBag.props.index + 1);
  },
})(DetailsForm);

export default Details;
