import React from 'react';
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  ErrorMessage,
  Formik,
} from 'formik';
import { FormCarousel_Form, Form_Details } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';

import Select from 'react-select';

const initialValues = {
  selectedCategories: [] // Store selected categories and subcategories
};

const categoryOptions = [
  {
    label: 'Books',
    options: [
      { value: 'Subcategory 1.1', label: 'Subcategory 1.1' },
      { value: 'Subcategory 1.2', label: 'Subcategory 1.2' },
    ],
  },
  {
    label: 'Sports',
    options: [
      { value: 'Subcategory 2.1', label: 'Subcategory 2.1' },
      { value: 'Subcategory 2.2', label: 'Subcategory 2.2' },

    ],
  },
  {
    label: 'Games',
    options: [
      { value: 'Subcategory 3.1', label: 'Subcategory 3.1' },
      { value: 'Subcategory 3.2', label: 'Subcategory 3.2' },
    ],
  },
  {
    label: 'Toys',
    options: [
      { value: 'Subcategory 4.1', label: 'Subcategory 4.1' },
      { value: 'Subcategory 4.2', label: 'Subcategory 4.2' },
    ],
  },
  {
    label: 'Animals',
    options: [
      { value: 'Subcategory 5.1', label: 'Subcategory 5.1' },
      { value: 'Subcategory 5.2', label: 'Subcategory 5.2' },
    ],
  },
  {
    label: 'Fashion',
    options: [
      { value: 'Subcategory 6.1', label: 'Subcategory 6.1' },
      { value: 'Subcategory 6.2', label: 'Subcategory 6.2' },
    ],
  },
];

const validateForm = (values) => {
  const errors = {};

  if (values.selectedCategories.length === 0) {
    errors.selectedCategories = 'Please select at least one category or subcategory';
  }

  return errors;
};

const handleSubmit = (values) => {
  // Handle form submission here
  console.log(values.selectedCategories);
};

const DetailsForm = (
  props
) => {
  return (
    <Stage transition={props.transition}>
      <div className="wrap">
      <div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <h3>Choose categories and subcategories</h3>
            {/* <Field name="selectedCategories">
              {({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={categoryOptions}
                  onChange={(selectedOptions) => setFieldValue('selectedCategories', selectedOptions)}
                  value={values.selectedCategories}
                  // menuPortalTarget={document.body}
                />
              )}
            </Field> */}
            <p className="error">
              <ErrorMessage name="selectedCategories" />
            </p>

            <input className="textbox submit" type="submit" value="Continue" />
          </Form>
        )}
      </Formik>
    </div>



        {/* <Form>
          <h3>Choose a category</h3>
          <Field
            className='textbox'
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
        </Form> */}
        {/* <Form>
          <h3>Choose categories</h3>
          <Field
            as="select"
            className="textbox"
            name="category"
            multiple // Add the 'multiple' attribute to allow multiple selections
          >
            <optgroup label="Boeken">
              <option value="Novels">Novels</option>
              <option value="Thrillers">Thrillers</option>
              <option value="Fantasy">Fantasy</option>
            </optgroup>
            <optgroup label="Sports">
              <option value="Soccer">Soccer</option>
              <option value="Basketball">Basketball</option>
              <option value="Skateboarding">Skateboarding</option>
            </optgroup>
            <optgroup label="Games">
              <option value="Fighting">Fighting</option>
              <option value="Platformer">Platformer</option>
              <option value="Racing">Racing</option>
            </optgroup>
            <optgroup label="Toys">
              <option value="Dolls">Dolls</option>
              <option value="Outdoor Play Sets">Outdoor Play Sets</option>
              <option value="Cuddly Toys">Cuddly Toys</option>
            </optgroup>
            <optgroup label="Animals">
              <option value="Dogs">Dogs</option>
              <option value="Cats">Cats</option>
              <option value="Rabbits">Rabbits</option>
              <option value="Hamsters">Hamsters</option>
            </optgroup>
            <optgroup label="Fashion">
              <option value="Hoodies">Hoodies</option>
              <option value="Dresses">Dresses</option>
              <option value="T-Shirts">T-Shirts</option>
              <option value="Jackets">Jackets</option>
            </optgroup>
          </Field>
          <p className="error">
            <ErrorMessage name="category" />
          </p>

          <input className="textbox submit" type="submit" value="Continue" />
        </Form> */}
      </div>
    </Stage>
  );
};

const Details = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: '',
    };
  },
  validate: (values) => {
    let errors = {};
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
