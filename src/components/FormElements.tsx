import React from "react";
import type {
  CheckboxProps,
  DatePickerProps,
  RadioButtonProps,
  SliderProps,
  TextFieldProps,
} from "../types";

const TextField = ({
  name,
  label,
  placeholder,
  isRequired,
  type,
  onChange,
}: TextFieldProps) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className="input--container">
      <label htmlFor={name}>
        {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        onBlur={handleBlur}
      />
    </div>
  );
};

const Checkbox = ({ name, label, isRequired, onChange }: CheckboxProps) => {
  return (
    <div className="input--container">
      <input
        type="checkbox"
        name={name}
        required={isRequired}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={name}>
        {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      </label>
    </div>
  );
};

const RadioButton = ({
  name,
  label,
  options,
  isRequired,
  onChange,
}: RadioButtonProps) => {
  return (
    <div className="input--container">
      <label htmlFor={name}>
        {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      </label>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            required={isRequired}
            onChange={(e) => onChange(e.target.value)}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

const DatePicker = ({
  name,
  label,
  placeholder,
  isRequired,
  onChange,
}: DatePickerProps) => {
  return (
    <div className="input--container">
      <label htmlFor={name}>
        {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type="date"
        name={name}
        id={name}
        placeholder={placeholder}
        required={isRequired}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const Slider = ({
  name,
  label,
  minValue,
  maxValue,
  isRequired,
  onChange,
}: SliderProps) => {
  return (
    <div className="input--container">
      <label htmlFor={name}>
        {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type="range"
        name={name}
        min={minValue}
        max={maxValue}
        required={isRequired}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export { TextField, Checkbox, DatePicker, RadioButton, Slider };
