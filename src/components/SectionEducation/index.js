import React from 'react';
import { connect } from 'react-redux';
import Data from './Data';
import { DATA_EDUCATION } from "../../constants/data";
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'sectionEducationContainer';
const CLASS_LINE = 'sectionEducationLine';
////////////////////////////////////////////////////////////////////////////////


/**
 * Education section component.
 *
 * Represents all the data related with education using a timeline.
 */
const SectionEducation = () => {
  const content = DATA_EDUCATION.map((el, idx) => {
    return <Data {...el} key={ `educationElement_${idx}` }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SectionEducation);
