import React from 'react';
import { connect } from 'react-redux';
import Section from '../Section';
import { TITLES } from "../../constants/strings";
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_MAIN_CONTAINER = 'LeftColumnContainer';
////////////////////////////////////////////////////////////////////////////////


/**
 * LeftColumn component.
 *
 * Represents the left column of the content of the website.
 */
const LeftColumn = () => {
  return (
    <div className={CLASS_MAIN_CONTAINER}>
      <Section title={ TITLES.education }/>
      <Section title={ TITLES.languages }/>
      <Section title={ TITLES.personalSkills }/>
      <Section title={ TITLES.hobbies }/>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
    webSize: state.app.webSize,
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LeftColumn);
