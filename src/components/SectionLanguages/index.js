import React from 'react';
import { connect } from 'react-redux';
import { DATA_LANGUAGES } from "../../constants/data";
import CircleProgress from '../../charts/CircleProgress';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'SectionLanguagesContainer flex-horizontal';
const CLASS_TEXT = 'SectionLanguagesLanguage';
////////////////////////////////////////////////////////////////////////////////


/**
 * Languages section component.
 *
 * Represents the level of different languages using progress charts..
 */
const SectionLanguages = () => {
  // Each language element is composed by a progress chart and a title.
  const circles = DATA_LANGUAGES.map((el, idx) => {
    return (
      <div key={ `languageElement_${idx}` }>
        <CircleProgress data={el} side={80} image={el.name}/>
        <div className={CLASS_TEXT}>{el.name}</div>
      </div>
    );
  });
  return (
    <div className={CLASS_CONTAINER}>
      {circles}
    </div>
  );
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionLanguages);
