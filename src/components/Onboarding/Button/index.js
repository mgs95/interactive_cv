import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'buttonComponent';
////////////////////////////////////////////////////////////////////////////////


/**
 * Button component.
 */
const Button = ({ onButtonClick }) => {
  return (
    <div className={ CLASS_CONTAINER } onClick={ onButtonClick }>
      Close
    </div>
  );
};

Button.propTypes = {
  /** A handler for the button click event */
  onButtonClick: PropTypes.func.isRequired
};

export default Button;
