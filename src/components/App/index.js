import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import Onboarding from '../Onboarding';
import './normalize.css';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'App';
const CLASS_CONTENT = 'mainContainer content flex-vertical';
const CLASS_COLUMNS = 'appColumns content flex-horizontal';
////////////////////////////////////////////////////////////////////////////////

/**
 * Main App component.
 *
 * Contain the main blocks of the app: Header, LeftColumn and RightColumn
 */
const App = ({ showOnboarding }) => {
  const onboarding = showOnboarding ? <Onboarding /> : '';
  return (
    <div className={ CLASS_CONTAINER }>
      { onboarding }
      <div className={ CLASS_CONTENT }>
        <Header />
        <div className={ CLASS_COLUMNS }>
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  /** Should the onboarding be showed? */
  showOnboarding: PropTypes.bool.isRequired
};


const mapStateToProps = state => {
  return ({
    showOnboarding: state.app.showOnboarding
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
