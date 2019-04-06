import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'titleContainer';
const CLASS_LINE = 'titleLine';
const CLASS_TEXT = 'titleText';
////////////////////////////////////////////////////////////////////////////////


/**
 * Title component.
 *
 * Represents a title for a section.
 */
const Title = ({ text, orientation }) => {
  const containerClass = `${CLASS_CONTAINER} ${orientation}`;
  return (
    <div className={containerClass}>
      <div className={CLASS_LINE} />
      <span className={CLASS_TEXT}>
        {text}
      </span>
    </div>
  );
};

Title.propTypes = {
  /** Text the title will display */
  text: PropTypes.string.isRequired,
  /** Text align for the title */
  orientation: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
