import React from 'react';
import { withFormik, Form, Field, ErrorMessage, FormikErrors, FormikProps, FieldProps } from 'formik';
import { FormCarousel_Form, Form_Category } from '../FormCarousel/types';
import Stage from '../FormCarousel/Stage';
import Select from 'react-select';
import { CustomInput } from './CategoryFormStyles';

interface FormValues {
  selectedCategories: any[];
}

const initialValues = {
  selectedCategories: [],
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
  // Add more category options here
];

const validateForm = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  if (values.selectedCategories.length === 0) {
    errors.selectedCategories =
      'Please select at least one category or subcategory';
  }

  return errors;
};

const CategoryForm: React.FC<FormCarousel_Form & FormikProps<FormValues>> = (props) => {
  return (
    <Stage transition={props.transition}>
      <CustomInput>
        <Form>
          <h3>Choose categories and subcategories</h3>
          <Field name="selectedCategories">
            {(field: FieldProps<FormValues['selectedCategories']>) => (
              <Select
                {...field.field}
                isMulti
                options={categoryOptions}
                onChange={(selectedOptions) =>
                  props.setFieldValue('selectedCategories', selectedOptions)
                }
                value={props.values.selectedCategories}
              />
            )}
          </Field>
          <p className="error">
            <ErrorMessage name="selectedCategories" />
          </p>

          <input className="textbox submit" type="submit" value="Continue" />
        </Form>
      </CustomInput>
    </Stage>
  );
};


const Category = withFormik<FormCarousel_Form, FormValues>({
  mapPropsToValues: (props) => {
    return {
      selectedCategories: [],
    };
  },
  validate: (values) => {
    const errors: FormikErrors<FormValues> = {};
    if (values.selectedCategories.length === 0) {
      errors.selectedCategories = 'Please provide at least one category';
    }
    return errors;
  },
  handleSubmit: (values, formikBag) => {
    formikBag.props.setCompleted(formikBag.props.index, true);
    formikBag.props.toggleStage(formikBag.props.index + 1);
  },
})(CategoryForm);

export default Category;
