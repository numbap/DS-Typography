/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";

export function Link(props) {
  //Styling for links based on Figma Design
  let basicStyle = "";
  switch (props.linkStyle) {
    case "basicStyleWithEmphasis":
      basicStyle =
        "ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-font-bold ds-text-mobileh5 ds-leading-33px hover:ds-text-multi-blue-blue50b";
      break;
    case "titleLink":
      basicStyle =
        "ds-underline ds-text-multi-blue-blue70b ds-font-header ds-text-browserh5 ds-leading-23px ds-font-bold hover:ds-text-multi-blue-blue50b";
      break;
    case "smfooterBlue":
      basicStyle =
        "ds-text-multi-blue-blue70b ds-font-body ds-leading-20px ds-text-browserh7 hover:ds-underline";
      break;
    case "smfooterWhite":
      basicStyle =
        "ds-text-multi-neutrals-white ds-font-body ds-text-browserh7 ds-leading-20px ds-font-regular hover:ds-text-multi-neutrals-white hover:ds-underline focus:ds-ring-1 focus:ds-ring-white";
      break;
    case "smBreadcrumbs":
      basicStyle =
        "ds-text-multi-blue-blue70b ds-font-body ds-text-browserh8 ds-leading-23px ds-font-regular hover:ds-text-multi-blue-blue50b";
      break;
    case "cardActionLink":
      basicStyle =
        "ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-underline ds-leading-28px ds-font-regular hover:ds-text-multi-blue-blue50b";
      break;
    default:
      basicStyle =
        "ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-leading-33px hover:ds-text-multi-blue-blue50b";
      break;
  }

  const Component = props.component || "a";

  function onKeyDown() {
    true;
  }

  return Component !== "a" ? (
    <Component
      href={props.href}
      disabled={props.disabled}
      lang={props.lang}
      target={props.target}
      aria-label={props.ariaLabel || props.text}
      locale={props.locale}
      role="link"
    >
      <a
        href={props.href}
        onClick={props.onClick ? props.onClick : undefined}
        id={props.id}
        className={`${basicStyle}`}
        data-testid={props.dataTestId}
        data-cy={props.dataCy || props.id}
        data-cy-button={props.dataCyButton}
        data-gc-analytics-customclick={props.dataGcAnalyticsCustomClick}
        onKeyDown={onKeyDown}
      >
        {/* <!-- English Text: English --> */}
        <span className={props.abbr ? "ds-language-toggle-text" : ""}>
          {props.text}
        </span>
        {/* <!-- English Text: title="English", en --> */}
        <abbr className="ds-language-toggle-abbr" title={props.text}>
          {props.abbr}
        </abbr>
      </a>
    </Component>
  ) : (
    <a
      href={props.href}
      className={`${basicStyle}`}
      id={props.id}
      data-testid={props.dataTestId}
      data-cy={props.dataCy || props.id}
      data-cy-button={props.dataCyButton}
      disabled={props.disabled}
      lang={props.lang}
      target={props.target}
      aria-label={props.ariaLabel || props.text}
      locale={props.locale}
      onClick={props.onClick ? props.onClick : undefined}
      data-gc-analytics-customclick={props.dataGcAnalyticsCustomClick}
    >
      {/* <!-- English Text: English --> */}
      <span className={props.abbr ? "ds-language-toggle-text" : ""}>
        {props.text}
      </span>
      {/* <!-- English Text: title="English", en --> */}
      <abbr className="ds-language-toggle-abbr" title={props.text}>
        {props.abbr}
      </abbr>
    </a>
  );
}

Link.defaultProps = {
  target: "_self",
  href: "#",
};

Link.propTypes = {
  /**
   * The text that Text Link will display
   */
  text: PropTypes.string,
  /**
   * Abbrivation for text
   */
  abbr: PropTypes.string,
  /**
   * Style link as a Text Link when there's a href
   */
  href: PropTypes.string,
  /**
   * Target attribute to tell the browser where the linked document should be loaded.
   */
  target: PropTypes.string,
  /**
   * Identify which Text Link being clicked
   */
  id: PropTypes.string.isRequired,
  /**
   * Lang attribute for links that do not match the language of the top level document
   */
  lang: PropTypes.string,
  /**
   * css overrides for Link
   */
  className: PropTypes.string,
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,

  /**
   * For tracking on click of forms for analytics
   */
  analyticsTracking: PropTypes.bool,

  /**
   * use ariaLabel to provide more descriptive text for a link (screen reader friendly)
   */
  ariaLabel: PropTypes.string,

  /**
   * Allow user to use configurable component, default is html anchor tag
   */
  component: PropTypes.elementType,
};
