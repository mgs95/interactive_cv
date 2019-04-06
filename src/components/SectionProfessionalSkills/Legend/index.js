import React from 'react';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const TEXT_X = 'x = score';
const TEXT_BEGINNER = 'Beginner: x < 30';
const TEXT_INTERMEDIATE = 'Intermediate: 30 < x < 80';
const TEXT_ADVANCED = 'Advanced: x > 80';

const CLASS_SCORE = 'SectionProfessionalSkillsScore';
const CLASS_SCORE_MAP_CONTAINER = 'SectionProfessionalSkillsScoreMapContainer flex-horizontal';
const CLASS_SCORE_MAP = 'SectionProfessionalSkillsScoreMap';
////////////////////////////////////////////////////////////////////////////////


/**
 * Represents the legend of professional skills section.
 */
const Legend = () => (
  <React.Fragment>
    <div className={CLASS_SCORE}>{ TEXT_X }</div>
    <div className={CLASS_SCORE_MAP_CONTAINER}>
      <div className={CLASS_SCORE_MAP}>{ TEXT_BEGINNER }</div>
      <div className={CLASS_SCORE_MAP}>{ TEXT_INTERMEDIATE }</div>
      <div className={CLASS_SCORE_MAP}>{ TEXT_ADVANCED }</div>
    </div>
  </React.Fragment>
);

export default Legend;
