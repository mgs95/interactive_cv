import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Icon from "../../Icon";
import {ICONS} from "../../../constants/icons";

/////////////////                  CONSTANTS                   /////////////////
const MEDAL_COLOR = {
  gold: 'gold',
  silver: 'silver',
  bronze: '#CD7f32'
};

const CLASS_ROW_CONTAINER = 'sectionContestsAndAwards_rowContainer';
const CLASS_ROW_CONTENT = 'sectionContestsAndAwards_rowContent flex-vertical';
const CLASS_ROW_FIRST_LINE = 'sectionContestsAndAwards_rowFirstLine';
const CLASS_ROW_SECOND_LINE = 'sectionContestsAndAwards_rowSecondLine';
////////////////////////////////////////////////////////////////////////////////


/**
 * Represents a row inside a section. Each row represents a contest or an award
 * and contains information about the medal, a descriptive title and a the date.
 */
const Row = ({ data }) => {
  return (
    <div className={ CLASS_ROW_CONTAINER }>
      <Icon icon={ICONS.medal} size={ 24 } color={ MEDAL_COLOR[data.medal] } />
      <div className={ CLASS_ROW_CONTENT }>
        <div className={ CLASS_ROW_FIRST_LINE }>
          { data.title }
        </div>
        <div className={ CLASS_ROW_SECOND_LINE }>
          { data.date }
        </div>
      </div>
    </div>
  );
};

Row.propTypes = {
  /** Content of the row. */
  data: PropTypes.shape({
    /** String representing the medal obtained */
    medal: PropTypes.string.isRequired,
    /** Descriptive text about the award or contest */
    title: PropTypes.string.isRequired,
    /** Date showing when the award or contest occurred */
    date: PropTypes.string.isRequired
  }).isRequired
};

export default Row;
