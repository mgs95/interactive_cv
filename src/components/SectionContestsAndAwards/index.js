import React from 'react';
import { DATA_CONTESTS_AND_AWARDS } from "../../constants/data";
import { connect } from 'react-redux';
import Section from './Section';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'sectionContestsAndAwards_Container flex-horizontal';
////////////////////////////////////////////////////////////////////////////////


/**
 * Contests and awards section component.
 *
 * Represents sections that categorize different types of competitions. Each
 * section contains a list of contests or awards.
 */
const SectionContestsAndAwards = () => {
  const content = [];

  let idx = 0;
  for (const section of Object.keys(DATA_CONTESTS_AND_AWARDS)) {
    content.push(
      <Section
        text={ section }
        data={ DATA_CONTESTS_AND_AWARDS[section] }
        key={ `contestsAwardsSection_${idx}` }
      />
    );

    idx += 1;
  }

  return (
    <div className={ CLASS_CONTAINER }>
      { content }
    </div>
  );
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionContestsAndAwards);
