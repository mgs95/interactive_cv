import React from 'react';
import Header from '../Header';
import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
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
const App = () => (
  <div className={ CLASS_CONTAINER }>
    <div className={ CLASS_CONTENT }>
      <Header />
      <div className={ CLASS_COLUMNS }>
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  </div>
);

export default App;
