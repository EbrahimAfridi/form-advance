import * as yup from "yup";

export const schema = [
  {
    component: "TEXT_FIELD",
    type: "text", // to show the text icon
    name: "name",
    label: "Enter your name",
    placeholder: "Enter your name",
    isRequired: true, // to show the asterisk
    validate: yup.string().required("Name is required"),
  },
  {
    component: "TEXT_FIELD",
    type: "email", // to show the email icon
    name: "email",
    label: "Enter your email",
    placeholder: "Enter your email",
    isRequired: true, // to show the asterisk
    validate: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
  },
  {
    component: "TEXT_FIELD",
    name: "password",
    type: "password",
    label: "Enter your password",
    placeholder: "Enter your password",
    isRequired: true, // to show the asterisk
    validate: yup
      .string()
      .min(8, "Password must be atleast eight characters")
      .required("Password is required"),
  },
  {
    component: "TEXT_FIELD",
    type: "password",
    name: "confirmPassword",
    label: "Enter your password again",
    placeholder: "Enter your password again",
    isRequired: true, // to show the asterisk
    validate: yup
      .string()
      .oneOf([yup.ref("password")], "Password must match")
      .required("Confirm password is required"),
  },
  {
    component: "RADIO_BUTTON",
    name: "gender",
    label: "Enter your gender",
    placeholder: "Enter your gender",
    isRequired: true, // to show the asterisk
    options: ["Male", "Female", "Other"],
    validate: yup.string().required("Selecting a gender is required"),
  },
  {
    component: "DATE_PICKER",
    name: "birthdate",
    label: "Select your birthdate",
    placeholder: "Select your birthday",
    isRequired: true, // to show the asterisk
    validate: yup.date().required("Birthdate is required"),
  },
  {
    component: "SLIDER",
    name: "rating",
    label: "Rating",
    minValue: 1,
    maxValue: 5,
    validate: yup.number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
  },
  {
    component: "CHECKBOX",
    name: "terms",
    label: "Accept terms and conditions",
    isRequired: true, // to show the asterisk
    validate: yup.bool().oneOf([true], "Accepting terms and conditions is required"), 
  }
];
