import React from "react";
import { FormDatePicker } from "./FormDatePicker";
export default {
  title: "Components/FormDatePicker",
  component: FormDatePicker,
};

const Template = (args) => <FormDatePicker {...args} />;

export const English = Template.bind({});

English.args = {
  id: "FormDatePicker",
  // hasYear: false,
  // hasDay: false,
  lang: "en",
  minYear: 1999,
  maxYear: 2050,
  hasError: true,
  hasLabel: true,
  formErrorProps: {
    id: "formErrorId",
    errorMessage: "This is how form error will be displayed",
  },
  formLabelProps: {
    id: "requiredWithInfo",
    label: "Required Label",
    required: true,
    infoText:
      "Required label style with information icon. You can hide by clicking on icon again.",
    helpText:
      "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
  },
};

export const French = Template.bind({});

French.args = {
  id: "FormDatePicker",
  // hasYear: false,
  // hasDay: false,
  lang: "fr",
  minYear: 1999,
  maxYear: 2050,
  hasError: true,
  hasLabel: true,
  formErrorProps: {
    id: "formErrorId",
    errorMessage: "This is how form error will be displayed",
  },
  formLabelProps: {
    id: "requiredWithInfo",
    label: "Required Label",
    required: true,
    infoText:
      "Required label style with information icon. You can hide by clicking on icon again.",
    helpText:
      "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
  },
};
