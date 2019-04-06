import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Title from '../Title';
import { TITLES } from "../../constants/strings";
import SectionEducation from '../SectionEducation';
import SectionLanguages from '../SectionLanguages';
import SectionPersonalSkills from '../SectionPersonalSkills';
import SectionHobbies from '../SectionHobbies';
import SectionExperience from '../SectionExperience';
import SectionProfessionalSkills from '../SectionProfessionalSkills';
import SectionContestsAndAwards from '../SectionContestsAndAwards';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const RIGHT = 'right';
const LEFT = 'left';

const CLASS_CONTAINER = 'SectionContainer';
////////////////////////////////////////////////////////////////////////////////

const SECTION_MAPPER = {};
SECTION_MAPPER[TITLES.education] = SectionEducation;
SECTION_MAPPER[TITLES.languages] = SectionLanguages;
SECTION_MAPPER[TITLES.personalSkills] = SectionPersonalSkills;
SECTION_MAPPER[TITLES.hobbies] = SectionHobbies;
SECTION_MAPPER[TITLES.experience] = SectionExperience;
SECTION_MAPPER[TITLES.professionalSkills] = SectionProfessionalSkills;
SECTION_MAPPER[TITLES.contestsAndAwards] = SectionContestsAndAwards;

// Sections located at left side. Used to set the titles' text align
const LEFT_COLUMN_SECTIONS = [
  TITLES.education,
  TITLES.languages,
  TITLES.personalSkills,
  TITLES.hobbies
];

/**
 * Section component.
 *
 * Represents a section. Each section is composed by a title and the content of
 * the section.
 */
const Section = ({title}) => {
  const ActSection = SECTION_MAPPER[title];
  const orientation = LEFT_COLUMN_SECTIONS.includes(title) ? RIGHT : LEFT;

  return (
    <div className={CLASS_CONTAINER}>
      <Title text={title} orientation={orientation}/>
      <ActSection />
    </div>
  );
};

Section.propTypes = {
  /** Title of the section */
  title: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
