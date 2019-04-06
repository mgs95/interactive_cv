import React from 'react';
import PropTypes from 'prop-types';
import HorizontalBarList from '../../../charts/HorizontalBarList';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const COLORS = ['#15A9DB', '#E29438', '#7C7C7C', '#71D16F', '#E96598'];
const WIDTH = 200;
const ROW_HEIGHT = 16;

const CLASS_GROUP_CONTAINER = 'flex-horizontal SectionProfessionalSkillsGroup';
const CLASS_GROUP_TITLE = 'SectionProfessionalSkillsGroupTitle';
const CLASS_GROUP_SEPARATOR = 'SectionProfessionalSkillsGroupSeparator';
////////////////////////////////////////////////////////////////////////////////


/**
 * Represents a group of skills. Includes a group title and a bar chart.
 */
const Group = ({ group, idx }) => (
  <div className={CLASS_GROUP_CONTAINER + ' group-' + idx}>
      <div className={CLASS_GROUP_TITLE}>{group.title}</div>
      <div className={CLASS_GROUP_SEPARATOR} />
      <HorizontalBarList
        width={ WIDTH }
        height={ROW_HEIGHT * group.data.length}
        data={group.data}
        color={COLORS[idx]}
        first={idx === 0}
      />
    </div>
);

Group.propTypes = {
  /** Group information. Contains its title and data. */
  group: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired,
  /** Position of the group compared to other Group elements */
  idx: PropTypes.number.isRequired
};

export default Group;
