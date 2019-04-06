import React from 'react';
import { connect } from 'react-redux';
import Section from '../Section';
import { TITLES } from "../../constants/strings";
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_MAIN_CONTAINER = 'RightColumnContainer';
////////////////////////////////////////////////////////////////////////////////


/**
 * RightColumn component.
 *
 * Represents the left column of the content of the website.
 */
const RightColumn = () => {
  return (
    <div className={CLASS_MAIN_CONTAINER}>
      <Section title={ TITLES.experience }/>
      <Section title={ TITLES.professionalSkills }/>
      <Section title={ TITLES.contestsAndAwards }/>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
    webSize: state.app.webSize,
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);
