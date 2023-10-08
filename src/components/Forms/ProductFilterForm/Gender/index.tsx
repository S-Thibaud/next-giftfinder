import React from 'react';
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import { FormCarousel_Form, Form_Gender } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';

const GenderForm: React.FC<FormCarousel_Form & FormikProps<Form_Gender>> = (
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

          <input className="textbox submit" type="submit" value="Continue" />
        </Form>
      </div>
    </Stage>
  );
};

const Gender = withFormik<FormCarousel_Form, Form_Gender>({
  mapPropsToValues: (props) => {
    return {
      gender: '',
    };
  },
  validate: (values: Form_Gender) => {
    let errors: FormikErrors<any> = {};
    if (values.gender.length === 0) {
      errors['gender'] = 'Please provide a gender';
    }
    return errors;
  },
  handleSubmit: (values, formikBag) => {
    formikBag.props.setCompleted(formikBag.props.index, true);
    formikBag.props.toggleStage(formikBag.props.index + 1);
  },
})(GenderForm);

export default Gender;
