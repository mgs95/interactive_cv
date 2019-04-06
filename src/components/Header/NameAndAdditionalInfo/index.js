import React from 'react';
import { NAME } from "../../../constants/data";
import { WEBSITE_URL } from "../../../constants/data";
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_NAME = 'name text-big';
const CLASS_INTERACTIVE_CV = 'interactive-cv';
////////////////////////////////////////////////////////////////////////////////


/**
 * NameAndAdditionalInfo component.
 *
 * Displays my name and some additional information (about this website).
 */
const NameAndAdditionalInfo = () => (
  <React.Fragment>
    <div className={ CLASS_NAME }>
      { NAME }
    </div>
    <div className={ CLASS_INTERACTIVE_CV }>
      <strong>{ 'Coming soon: ' }</strong>
      {`Visit my interactive CV at ${WEBSITE_URL}`}
    </div>
  </React.Fragment>
);

export default NameAndAdditionalInfo;
