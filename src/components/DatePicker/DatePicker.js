/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import React from "react";
import dropdown from "../../assets/dropdown.svg";
import { Image } from "../Image/Image";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormError } from "../FormError/FormError";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
import "./styles.css";

export function DatePicker(props) {
  const {
    id,
    lang,
    onMonthChange,
    onDayChange,
    onYearChange,
    hasDay,
    hasYear,
    day,
    month,
    year,
    maxDay,
    minYear,
    maxYear,
    hasLabel,
    hasError,
    formLabelProps,
    formErrorProps,
  } = props;

  const language = lang === "en" ? EN : lang === "fr" ? FR : EN;

  const monthValues = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  return (
    <>
      {hasLabel ? (
        <FormLabel
          label={formLabelProps.label}
          required={formLabelProps.required}
          infoText={formLabelProps.infoText}
          helpText={formLabelProps.helpText}
        />
      ) : null}
      <div id={id} className="ds-relative ds-flex">
        <div className="flex flex-col">
          <label className="ds-form-date" htmlFor={"datePickerMonth"}>
            {language.datePicker.month}
          </label>

          <select
            id="datePickerMonth"
            defaultValue={month}
            onChange={onMonthChange}
            className="ds-w-165px ds-py-5px ds-flex ds-px-14px ds-date-text ds-border-1.5 ds-border-multi-neutrals-grey85a ds-rounded"
          >
            {monthValues.map((mv, index) => (
              <option value={mv} key={`datePicker-month-option-${index}`}>
                {language.datePicker.months[mv]}
              </option>
            ))}
          </select>
          <div className="dropdownPos" aria-hidden="true">
            <Image
              alt="Default Image"
              id="image"
              className="ds-w-16px ds-h-10px"
              src={dropdown}
            />
          </div>
        </div>
        {hasDay ? (
          <div className="ds-flex ds-flex-col sm:ds-pl-24px ds-pl-8px">
            <label htmlFor="datePickerDay" className="ds-form-date">
              {language.datePicker.day}
            </label>
            <input
              id="datePickerDay"
              defaultValue={day}
              type="number"
              min={"1"}
              max={maxDay}
              onChange={onDayChange}
              className="ds-w-46px sm:ds-w-68px ds-px-10px ds-rounded ds-date-text ds-border-1.5 ds-border-multi-neutrals-grey85a ds-py-5px "
            />
          </div>
        ) : null}
        {hasYear ? (
          <div className="ds-flex ds-flex-col sm:ds-pl-24px ds-pl-8px">
            <label htmlFor="datePickerYear" className="ds-form-date">
              {language.datePicker.year}
            </label>
            <input
              id="datePickerYear"
              defaultValue={year}
              type="number"
              min={minYear}
              max={maxYear}
              onChange={onYearChange}
              className="ds-w-70px sm:ds-w-165px ds-py-5px ds-px-10px ds-rounded ds-date-text ds-border-1.5 ds-border-multi-neutrals-grey85a"
            />
          </div>
        ) : null}
      </div>
      {hasError ? (
        <FormError errorMessage={formErrorProps.errorMessage} />
      ) : null}
    </>
  );
}

DatePicker.defaultProps = {
  onMonthChange: () => {},
  onDayChange: () => {},
  onYearChange: () => {},
  hasDay: true,
  hasYear: true,
  hasError: false,
  hasLabel: false,
  maxDay: 31,
  minYear: 0,
  maxYear: 10000,
  lang: "en",
};

DatePicker.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * Switch between english and french header. Pass in "en" or "fr"
   */
  lang: PropTypes.oneOf(["en", "fr"]),

  onMonthChange: PropTypes.func,
  onDayChange: PropTypes.func,
  onYearChange: PropTypes.func,

  hasDay: PropTypes.bool,
  hasYear: PropTypes.bool,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  hasError: PropTypes.bool,
  hasLabel: PropTypes.bool,
  maxDay: PropTypes.number,
  minYear: PropTypes.number,
  maxYear: PropTypes.number,

  /**
   * Form Error Props
   */
  formErrorProps: PropTypes.shape({
    id: PropTypes.string,
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