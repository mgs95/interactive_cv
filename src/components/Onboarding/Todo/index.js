import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import { ICONS } from "../../../constants/icons";
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'onboardingTodoContainer flex-horizontal';
const CLASS_TEXT = 'onboardingTodoText';

const CLASS_COMPLETED = ' completed';
////////////////////////////////////////////////////////////////////////////////


const IconDone = <Icon icon={ ICONS.tick } color={ 'green' } size={ 16 }/>;
const IconPending = <Icon icon={ ICONS.square } color={ 'orange' } size={ 16 }/>;

/**
 * _TODO component.
 *
 * Describes a task to do. The tank may be completed, in that case will present
 * a special style.
 */
const Todo = ({ data }) => {
  const todoClass = CLASS_TEXT + (data.done ? CLASS_COMPLETED : '');
  const icon = data.done ? IconDone : IconPending;

  return (
    <div className={ CLASS_CONTAINER }>
      { icon }
      <div className={ todoClass }>{ data.todo }</div>
    </div>
  );
};

Todo.propTypes = {
  /** Data required to build the _todo element. */
  data: PropTypes.shape({
    /** Description text */
    todo: PropTypes.string.isRequired,
    /** Is the task completed? */
    done: PropTypes.bool.isRequired
  }).isRequired
};

export default Todo;
