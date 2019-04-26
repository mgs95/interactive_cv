import React from 'react';
import PropTypes from 'prop-types';
import { DATA_ONBOARDING } from "../../constants/data";
import './index.css';
import Todo from "./Todo";
import Button from './Button';
import { connect } from 'react-redux';
import { hideOnboarding } from "../../actions/app";

/////////////////                  CONSTANTS                   /////////////////
const TITLE = 'WORK IN PROGRESS';
const SUBTITLE = 'The idea for this project is to make an interactive CV. ' +
  'Each section will allow the user to interact so more information appears ' +
  'where is desired.';
const SUBTITLE_L2 = 'The following list shows the progress to meet the ' +
  'requirements:';

const CLASS_CONTAINER = 'onboardingContainer';
const CLASS_BG = 'onboardingBackground';
const CLASS_CONTENT = 'onboardingContent';
const CLASS_TITLE = 'onboardingTitle';
const CLASS_TITLE_LINE = 'onboardingTitleLine';
const CLASS_SUBTITLE = 'onboardingSubtitle';
const CLASS_TODOS = 'onboardingTodos';
////////////////////////////////////////////////////////////////////////////////

/**
 * Onboarding component.
 *
 * Shows a message telling about the progress of the project. Contains a title,
 * a description and a list to tasks.
 */
const Onboarding = ({ onButtonClick }) => {
  const todos = DATA_ONBOARDING.map(todo => <Todo data={todo} />);

  return (
    <div className={ CLASS_CONTAINER }>
      <div className={ CLASS_BG } />
      <div className={ CLASS_CONTENT }>
        <div className={ CLASS_TITLE }>
          <div className={ CLASS_TITLE_LINE } />
          <div>{ TITLE }</div>
        </div>
        <div className={ CLASS_SUBTITLE }>{ SUBTITLE }</div>
        <div className={ CLASS_SUBTITLE }>{ SUBTITLE_L2 }</div>
        <div className={ CLASS_TODOS }>{ todos }</div>
        <Button onButtonClick={ onButtonClick }/>
      </div>
    </div>
  );
};


Onboarding.propTypes = {
  /** Action to hide the onboarding */
  onButtonClick: PropTypes.bool.isRequired
};


const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {
  onButtonClick: hideOnboarding
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
