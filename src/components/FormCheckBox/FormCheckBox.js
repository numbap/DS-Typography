import PropTypes from "prop-types";
import React from "react";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormError } from "../FormError/FormError";
import { CheckBox } from "../CheckBox/CheckBox";

export function FormCheckBox(props) {
  const { id, formErrorProps, formLabelProps, checkBoxList } = props;
  let size = checkBoxList.length;
  return (
    <div id={id}>
      <FormLabel
        label={formLabelProps.label}
        required={formLabelProps.required}
        infoText={formLabelProps.infoText}
        helpText={formLabelProps.helpText}
      />
      {checkBoxList.map((value, index) => {
        let style = index === size - 1 ? "ds-pb-0" : "md:ds-pb-8px ds-pb-24px";
        return (
          <div
            key={index}
            className={
              index === 0 ? " md:ds-pt-2px md:ds-pb-8px ds-pb-24px" : style
            }
          >
            <CheckBox
              id={value.id}
              name={value.name}
              value={value.value}
              label={value.label}
              hasError={formErrorProps.hasError}
              onChange={value.onChange}
            />
          </div>
        );
      })}
      {formErrorProps.hasError ? (
        <FormError errorMessage={formErrorProps.errorMessage} />
      ) : null}
    </div>
  );
}

FormCheckBox.defaultProps = {};

FormCheckBox.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string.isRequired,

  /**
   * Each object represents it's own checkbox field.
   * Min of 1 checkbox field is required
   * Max of 7 checkbox fields can be created
   */
  checkBoxList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
      hasError: PropTypes.bool,
      onChange: PropTypes.func,
    })
  ).isRequired,

  /**
   * Form Error Props
   */
  formErrorProps: PropTypes.shape({
    id: PropTypes.string,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
  }),

  /**
   * Form Label Props
   */
  formLabelProps: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    infoText: PropTypes.string,
    helpText: PropTypes.string,
  }),
};
