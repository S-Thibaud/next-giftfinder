import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Stage from '../FormCarousel/Stage';
import Select from 'react-select';
import { CustomInput } from './CategoryFormStyles';
import { FormCarousel_Form, Form_Category } from '../FormCarousel/types';
import { FormCarouselContext } from '@/store/form-carousel-context';

const initialCategoryValues: Form_Category = {
  category: [], // Set an initial value for 'category'
};

// const validateForm = (values: FormValues) => {
//   const errors: Partial<FormValues> = {};

//   if (values.selectedCategories.length === 0) {
//     errors.selectedCategories =
//       'Please select at least one category or subcategory';
//   }

//   return errors;
// };

const CategoryForm: React.FC<FormCarousel_Form> = (props) => {
  const formCarouselCtx = useContext(FormCarouselContext);
  
  const categoryOptions = [
    {
      label: 'Books',
      options: [
        { category: 'Books', value: 'Novels', label: 'Novels' },
        { category: 'Books', value: 'Thrillers', label: 'Thrillers' },
        { category: 'Books', value: 'Fantasy', label: 'Fantasy' },
      ],
    },
  ];
  
  const handleSubmit = (values: Form_Category) => {
    formCarouselCtx.category = values.category;
    console.log(values.category);
    props.setCompleted(props.index, true);
    props.toggleStage(props.index + 1);
  };

  return (
    <Formik
      initialValues={initialCategoryValues}
      //validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <Stage transition={props.transition}>
          <CustomInput>
            <h3>Choose categories and subcategories</h3>
            <Field name="category">
              {({ field, form }: { field: any; form: any }) => (
                <Select
                  instanceId="long-value-select"
                  {...field}
                  isMulti
                  options={categoryOptions}
                  onChange={(selectedOptions: any) =>
                    form.setFieldValue('category', selectedOptions)
                  }
                  value={form.values.selectedCategories}
                />
              )}
            </Field>
            <p className="error">
              <ErrorMessage name="selectedCategories" />
            </p>

            <input className="textbox submit" type="submit" value="Continue" />
          </CustomInput>
        </Stage>
      </Form>
    </Formik>
  );
};

export default CategoryForm;
