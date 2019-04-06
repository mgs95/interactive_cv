import React from 'react';
import { connect } from 'react-redux';
import { DATA_PERSONAL_SKILLS } from "../../constants/data";
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'SectionPersonalSkillsContainer';
const CLASS_TABLE = 'SectionPersonalSkillsTable';
////////////////////////////////////////////////////////////////////////////////


/**
 * Personal skills section component.
 *
 * Represents a list of text elements (describing personal skills) in a 3x3
 * table.
 */
const SectionPersonalSkills = () => {
  // Builds rows from data.
  const table = DATA_PERSONAL_SKILLS.map((values, idx) => {
    const row = values.map((cell, idx2) => (
      <td key={ `personalSkillsCell_${idx2}` }>{cell}</td>
    ));

    return <tr key={ `personalSkillsRow_${idx}` }>{ row }</tr>;
  });
  return (
    <div className={CLASS_CONTAINER}>
      <table className={CLASS_TABLE}>
        {table}
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionPersonalSkills);
