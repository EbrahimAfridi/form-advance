import React from "react";
import * as yup from "yup";
import FormField from "./FormField";
import type { FormData, FormErrors, FieldSchema } from "../types";

interface FormProps {
  schema: FieldSchema[];
  onSubmit?: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ schema = [], onSubmit = () => {} }) => {
  const [formData, setFormData] = React.useState<FormData>({});
  const [formErrors, setFormErrors] = React.useState<FormErrors>({});

  const validateSchema = React.useMemo(
    () =>
      yup.object().shape(
        schema.reduce<Record<string, any>>((acc, field) => {
          if (field.validate) {
            acc[field.name] = field.validate;
          }
          return acc;
        }, {})
      ),
    [schema]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validateSchema.validate(formData, { abortEarly: false });

      setFormErrors({});
      onSubmit(formData);
      console.log("Form submitted:", formData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors: FormErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            errors[err.path] = err.message;
          }
        });

        setFormErrors(errors);
      }
    }
  };

  const handleChange = (name: string, value: any): void => {
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Validate the whole form on every change
      validateSchema
        .validate(updated, { abortEarly: false })
        .then(() => setFormErrors({}))
        .catch((error) => {
          if (error instanceof yup.ValidationError) {
            const errors: FormErrors = {};
            error.inner.forEach((err) => {
              if (err.path) {
                errors[err.path] = err.message;
              }
            });
            setFormErrors(errors);
          }
        });
      return updated;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {schema.map((field, index) => (
        <div key={index}>
          <FormField
            field={{
              ...field,
              error: formErrors[field.name],
            }}
            value={formData[field.name] || ""}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Apply</button>
    </form>
  );
};

export default Form;
