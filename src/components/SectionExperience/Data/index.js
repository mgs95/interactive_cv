import React from "react";
import PropTypes from 'prop-types';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_DATA_COMPONENT_CONTAINER = 'sectionExperienceDataComponentContainer';
const CLASS_DATA_COMPONENT_PLACE = 'sectionExperienceDataComponentPlace';
const CLASS_DATA_COMPONENT_YEAR = 'sectionExperienceDataComponentYear';
const CLASS_DATA_COMPONENT_TITLE = 'sectionExperienceDataComponentTitle';
const CLASS_DATA_COMPONENT_LINE = 'sectionExperienceDataComponentLine';
const CLASS_DATA_COMPONENT_DOT = 'sectionExperienceDataComponentDot';

const CLASS_DESCRIPTION_PARAGRAPH = 'sectionExperienceDescriptionParagraph';
////////////////////////////////////////////////////////////////////////////////


/**
 * Timeline data component.
 *
 * Represents a data for a timeline component. Each component is composed by
 * a title, a description and a time range.
 */
const Data = ({ place, year, title, description }) => {
  // Description can be formed by one or more paragraphs and each paragraph can
  // be formed by one or more lines. 'descriptions' contains all those elements.
  const descriptions = description.map((el, idx) => {
    const lines = el.map((line, idx2) => {
      return <div key={ `sectionExperienceLine_${idx2}` }>{ line }</div>;
    });

    return <div
      className={CLASS_DESCRIPTION_PARAGRAPH}
      key={ `sectionExperienceParagraph_${idx}` }
    >
      {lines}
    </div>;
  });

  return (
    <div className={CLASS_DATA_COMPONENT_CONTAINER}>
      <div className={CLASS_DATA_COMPONENT_PLACE}>{place}</div>
      <div className={CLASS_DATA_COMPONENT_YEAR}>{`${year[0]} - ${year[1]}`}</div>
      <div className={CLASS_DATA_COMPONENT_LINE} />
      <div className={CLASS_DATA_COMPONENT_DOT} />
      <div className={CLASS_DATA_COMPONENT_TITLE}>{title}</div>
      {descriptions}
    </div>
  );
};

Data.propTypes = {
  /**  String denoting the place the education took place */
  place: PropTypes.string.isRequired,
  /** Array of two years: initial and final years for the education element */
  year: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  ),
  /** Descriptive title for the education element */
  title: PropTypes.string.isRequired,
  /** Array of paragraphs. Each paragraph is an array of lines */
  description: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  ).isRequired,
};

export default Data;
