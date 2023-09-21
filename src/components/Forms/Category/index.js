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
import { FormCarousel_Form, Form_Category } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';

import Select from 'react-select';

const initialValues = {
  selectedCategories: [], // Store selected categories and subcategories
};

const categoryOptions = [
  {
    label: 'Books',
    options: [
      { value: 'Novels', label: 'Novels' },
      { value: 'Thrillers', label: 'Thrillers' },
      { value: 'Fantasy', label: 'Fantasy' },
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
    errors.selectedCategories =
      'Please select at least one category or subcategory';
  }

  return errors;
};

const handleSubmit = (values, formikBag) => {
  // Handle form submission here
  console.log(values.selectedCategories);
  console.log("test");
  formikBag.props.handleSubmit();
};

const CategoryForm = (props) => {
  return (
    <Stage transition={props.transition}>
      <div className="wrap">
        <div>
          <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={handleSubmit}
            // onSubmit={(values, formikBag) => {
            //   handleSubmit(values, formikBag); // Call your custom handleSubmit function
            //   // Optionally, you can add additional logic here if needed.
            // }}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <h3>Choose categories and subcategories</h3>
                <Field name="selectedCategories">
                  {({ field }) => (
                    <Select
                      {...field}
                      isMulti
                      options={categoryOptions}
                      onChange={(selectedOptions) =>
                        setFieldValue('selectedCategories', selectedOptions)
                      }
                      value={values.selectedCategories}
                      // menuPortalTarget={document.body}
                    />
                  )}
                </Field>
                <p className="error">
                  <ErrorMessage name="selectedCategories" />
                </p>

                <input
                  className="textbox submit"
                  type="submit"
                  value="Continue"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Stage>
  );
};

const Category = withFormik({
  mapPropsToValues: (props) => {
    return {
      selectedCategories: [],
    };
  },
  validate: (values) => {
    let errors = {};
    if (values.selectedCategories) {
      errors['selectedCategories'] = 'Please provide at least one category';
    }
    return errors;
  },
  handleSubmit: (values, formikBag) => {
    formikBag.props.setCompleted(formikBag.props.index, true);
    formikBag.props.toggleStage(formikBag.props.index + 1);
    console.log("test selected categories");
  },
})(CategoryForm);

export default Category;
