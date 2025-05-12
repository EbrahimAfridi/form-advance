import type { FormFieldProps } from "../types";
import {
  Checkbox,
  DatePicker,
  RadioButton,
  Slider,
  TextField,
} from "./FormElements";

const componentMapping = {
  TEXT_FIELD: TextField,
  CHECKBOX: Checkbox,
  DATE_PICKER: DatePicker,
  RADIO_BUTTON: RadioButton,
  SLIDER: Slider,
} as const;

type ComponentType = keyof typeof componentMapping;

const FormField = ({ field, onChange }: FormFieldProps) => {
  const Component =
    componentMapping[(field.component as ComponentType) || "TEXT_FIELD"];

  if (!Component) return null;

  // Pass value and onChange to all components
  return (
    <>
      <Component
        {...field}
        onChange={(val: any) => onChange(field.name, val)}
      />
      {field?.error && (
        <div className="error--message">
          {field.error}
        </div>
      )}
    </>
  );
};

export default FormField;
