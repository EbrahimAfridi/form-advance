// --- Field Schemas for each input type ---

export type TextFieldSchema = {
  component: "TEXT_FIELD";
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  isRequired?: boolean;
  error?: string;
};

export type CheckboxSchema = {
  component: "CHECKBOX";
  name: string;
  label: string;
  isRequired?: boolean;
  error?: string;
};

export type RadioButtonSchema = {
  component: "RADIO_BUTTON";
  name: string;
  label: string;
  options: string[];
  isRequired?: boolean;
  error?: string;
};

export type DatePickerSchema = {
  component: "DATE_PICKER";
  name: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  error?: string;
};

export type SliderSchema = {
  component: "SLIDER";
  name: string;
  label: string;
  minValue: number;
  maxValue: number;
  isRequired?: boolean;
  error?: string;
};

// --- Union type for all field schemas ---
export type FieldSchema =
  | TextFieldSchema
  | CheckboxSchema
  | RadioButtonSchema
  | DatePickerSchema
  | SliderSchema;

// --- Form data and errors ---
export interface FormData {
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string;
}

// --- FormFieldProps with generic value type ---
export interface FormFieldProps<T extends FieldSchema = FieldSchema> {
  field: T;
  value: any;
  onChange: (name: string, value: any) => void;
}

export type TextFieldProps = TextFieldSchema & {
  value: string;
  onChange: (value: string) => void;
};

export type CheckboxProps = CheckboxSchema & {
  value: boolean;
  onChange: (value: boolean) => void;
};

export type RadioButtonProps = RadioButtonSchema & {
  value: string;
  onChange: (value: string) => void;
};

export type DatePickerProps = DatePickerSchema & {
  value: string;
  onChange: (value: string) => void;
};

export type SliderProps = SliderSchema & {
  value: number;
  onChange: (value: number) => void;
};