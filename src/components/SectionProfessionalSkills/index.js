import React from 'react';
import { connect } from 'react-redux';
import { DATA_PROFESSIONAL_SKILLS } from "../../constants/data";
import Group from './Group';
import Legend from './Legend';
import HorizontalBarBackground from '../../charts/HorizontalBarList/HorizontalBarBackground';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const BACKGROUND_WIDTH = 140;
const ROW_HEIGHT = 16;
const GROUP_MARGIN = 19;

const CLASS_CONTAINER = 'SectionProfessionalSkillsContainer';
const CLASS_LINE = 'SectionProfessionalSkillsGroupLine';
////////////////////////////////////////////////////////////////////////////////


/**
 * Professional skills section component.
 *
 * Represents groups of professional skills. Each group is composed by a set of
 * technologies or programming languages showed in a table that also shows the
 * level of each one.
 */
const SectionProfessionalSkills = () => {
  // Builds groups from data, each group contains a table, a grouper
  const groups = DATA_PROFESSIONAL_SKILLS.map((el, idx) => (
    <Group group={el} idx={idx} key={ `professionalSkillsGroup_${idx}` }/>
  ));

  const nBars = DATA_PROFESSIONAL_SKILLS
    .map(el => el.data.length)
    .reduce((a,b) => a+b);
  const backgroundHeight = (
    nBars * ROW_HEIGHT +
    DATA_PROFESSIONAL_SKILLS.length * GROUP_MARGIN
  );

  return (
    <div className={CLASS_CONTAINER}>
      <HorizontalBarBackground
        width={ BACKGROUND_WIDTH }
        height={backgroundHeight}
      />
      {groups}
      <div className={CLASS_LINE}/>
      <Legend />
    </div>
  );
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionProfessionalSkills);
