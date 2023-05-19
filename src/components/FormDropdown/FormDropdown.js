import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./FormDropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormError } from "../FormError/FormError";
import SearchIcon from "../../assets/search-icon.svg";

export const FormDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);
  const [searchOption, setSearchOption] = useState("");
  const searchInputRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.onChange(option);
    setIsOpen(false);
  };

  const handleSearch = (event) => {
    setSearchOption(event.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {props.hasLabel && (
        <FormLabel
          id={props.formLabelProps.id}
          label={props.formLabelProps.label}
          required={props.formLabelProps.required}
          requiredText={props.formLabelProps.requiredText}
          optionalText={props.formLabelProps.optionalText}
          infoText={props.formLabelProps.infoText}
          describedBy={props.formLabelProps.describedBy}
          helpText={props.formLabelProps.helpText}
          hasHint={props.hasHint}
          hintProps={props.hintProps}
        />
      )}
      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <button
          className={`${isOpen ? "ds-rounded-t-[4px]" : "ds-rounded-[4px]"} ${
            props.hasError ? "ds-border-[#D3080C]" : "ds-border-[#6f6f66]"
          } dropdown-select ds-border-[1px]`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div className="ds-flex">
              <img src={SearchIcon} alt="search icon" />
              <input
                type="text"
                value={searchOption}
                ref={searchInputRef}
                onChange={handleSearch}
                placeholder="Search..."
                className="input-search"
              />
            </div>
          ) : (
            selectedOption
          )}
          <FontAwesomeIcon icon={faCaretDown} style={{ color: "#666666" }} />
        </button>
        <div className="dropdown-open">
          {isOpen && (
            <ul className="dropdown-options">
              {props.options
                .filter((option) =>
                  option.toLowerCase().includes(searchOption.toLowerCase())
                )
                .map((option, index) => (
                  <li
                    key={index}
                    className={`${
                      index === 0
                        ? "ds-border-none"
                        : "ds-border-t-[1px] ds-border-[#666666] ds-border-opacity-60"
                    } ${option === selectedOption ? "selected" : ""}`}
                  >
                    <button
                      onClick={() => handleOptionClick(option)}
                      className="dropdown-option"
                    >
                      {option}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
        {props.hasError && <FormError errorMessage={props.errorText} />}
      </div>
    </>
  );
};

FormDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  /**
   * The textfield label
   */
  hasLabel: PropTypes.bool,
  /**
   * Has errors
   */
  hasError: PropTypes.bool,
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
  /**
   * Option to show and custom Hint Expander
   */
  hasHint: PropTypes.bool,
  /**
   * Hint Expander props
   */
  hintProps: PropTypes.shape({
    textLink: PropTypes.string,
    description: PropTypes.string,
    withLink: PropTypes.bool,
    externalLinkText: PropTypes.string,
    optionalLinkText: PropTypes.string,
  }),
};