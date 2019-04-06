import React from 'react';
import Data from './Data';
import { connect } from 'react-redux';
import { DATA_EXPERIENCE } from "../../constants/data";
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'sectionExperienceContainer';
const CLASS_LINE = 'sectionExperienceLine';
////////////////////////////////////////////////////////////////////////////////


/**
 * Experience section component.
 *
 * Represents all the data related with experience using a timeline.
 */
const SectionExperience = () => {
  const content = DATA_EXPERIENCE.map((el, idx) => {
    return <Data {...el} key={ `sectionExperienceData_${idx}` }/>
  });

  return (
    <div className={CLASS_CONTAINER}>
      <div className={CLASS_LINE} />
      {content}
    </div>
  );
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionExperience);
