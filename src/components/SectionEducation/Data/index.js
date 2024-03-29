import React from "react";
import PropTypes from 'prop-types';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_DATA_COMPONENT_CONTAINER = 'sectionEducationDataComponentContainer';
const CLASS_DATA_COMPONENT_PLACE = 'sectionEducationDataComponentPlace';
const CLASS_DATA_COMPONENT_YEAR = 'sectionEducationDataComponentYear';
const CLASS_DATA_COMPONENT_TITLE = 'sectionEducationDataComponentTitle';
const CLASS_DATA_COMPONENT_LINE = 'sectionEducationDataComponentLine';
const CLASS_DATA_COMPONENT_DOT = 'sectionEducationDataComponentDot';

const CLASS_DESCRIPTION_PARAGRAPH = 'sectionEducationDescriptionParagraph';
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
      let body = line;

      // Splits URL from more info line and sets it as a link
      const moreInfo = line.split('More info: ');
      let link = '';

      if (moreInfo.length > 1) {
        body = 'More info: ';
        link = moreInfo[1];
      }

      return (
        <div key={ `educationDataLine_${idx2}` }>
          { body }
          <a href={link} target='_blank'>{ link }</a>
        </div>
      );
    });

    return <div
      className={CLASS_DESCRIPTION_PARAGRAPH}
      key={`educationLines_${idx}`}
    >
      {lines}
    </div>;
  });

  return (
    <div className={CLASS_DATA_COMPONENT_CONTAINER}>
      <div className={CLASS_DATA_COMPONENT_PLACE}>
        {place}
      </div>
      <div className={CLASS_DATA_COMPONENT_YEAR}>
        { `${year[1]} - ${year[0]}` }
      </div>
      <div className={CLASS_DATA_COMPONENT_LINE} />
      <div className={CLASS_DATA_COMPONENT_DOT} />
      <div className={CLASS_DATA_COMPONENT_TITLE}>
        { title }
      </div>
      { descriptions }
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
