import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_SECTION_CONTAINER = 'sectionContestsAndAwards_sectionContainer';
const CLASS_SECTION_TITLE = 'sectionContestsAndAwards_sectionTitle';
////////////////////////////////////////////////////////////////////////////////


/**
 * Represents a section inside Contests and Awards section. Each section is
 * composed by different rows (each one a contest or an award).
 */
const Section = ({ text, data }) => {
  const rows = data.map((row, idx) => (
    <Row data={ row } key={ `contestsAwardsSectionRow_${idx}` }/>)
  );

  return (
    <div className={ CLASS_SECTION_CONTAINER }>
      <div className={ CLASS_SECTION_TITLE }>
        { text }
      </div>
      { rows }
    </div>
  );
};

Section.propTypes = {
  /** Title of teh section */
  text: PropTypes.string.isRequired,
  /** Content of the section. Each element represents a row */
  data: PropTypes.arrayOf(PropTypes.shape({
    medal: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }))
};

export default Section;
