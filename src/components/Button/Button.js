import PropTypes from "prop-types";
import React from "react";

export function Button(props) {
  const style = "btn-" + props.style;
  return props.href ? (
    <a
      href={props.href}
      className={` btn-link focus:ring focus:ring-offset-4 `}
      onClick={props.onClick}
      id={props.id}
      // disabled={props.disabled}
    >
      {props.icon && !props.iconEnd ? (
        <img
          className="inline mr-auto pr-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        // Once image component is created it goes here to import icon
        <img
          className="inline ml-auto pl-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
    </a>
  ) : (
    <button
      className={`flex flex-row ${style} focus:ring focus:ring-offset-4`}
      onClick={props.onClick}
      type={props.type}
      id={props.id}
    >
      {props.icon && !props.iconEnd ? (
        <img
          className="mr-auto pr-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon && props.iconEnd ? (
        // Once image component is created it goes here to import icon
        <img
          className="ml-auto pl-2"
          src={props.icon}
          alt={props.iconAltText}
        />
      ) : undefined}
    </button>
  );
}

Button.defaultProps = {
  id: "btn1",
  style: "supertask",
  text: "default",
};

Button.propTypes = {
  /**
   * Identify which button being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * User must input one of the follow button styles to apply
   * to their button. To apply the link style, the user must
   * also add a value to the href prop
   */
  style: PropTypes.oneOf([
    "supertask",
    "primary",
    "secondary",
    "danger",
    "link",
  ]).isRequired,

  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,

  /**
   * Alt text for icon added to button
   */
  iconAltText: PropTypes.string,

  /**
   * This is for placing an icon at the end of the component
   */
  iconEnd: PropTypes.bool,

  /**
   * Use when button redirects to a new page.
   * Automatically applies the Link styling
   */
  href: PropTypes.string,

  /**
   * the type of the button
   */
  type: PropTypes.oneOf(["submit", "reset"]),

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * css overrides for button
   */
  className: PropTypes.string,

  /**
   * any other elements you want to add to the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
