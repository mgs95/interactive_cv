import React from 'react';
import { connect } from 'react-redux';
import { DATA_HOBBIES } from "../../constants/data";
import Sunburst from '../../charts/Sunburst';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const SUNBURST_SIZE = 310;

const CLASS_CONTAINER = 'SectionHobbiesContainer';
////////////////////////////////////////////////////////////////////////////////


/**
 * Hobbies section component.
 *
 * Represents all my hobbies using a sunburst chart.
 */
const SectionHobbies = () => {
  return (
    <div className={CLASS_CONTAINER}>
      <Sunburst side={ SUNBURST_SIZE } data={ DATA_HOBBIES }/>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionHobbies);
