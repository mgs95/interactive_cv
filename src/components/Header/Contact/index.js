import React from 'react';
import PropTypes from 'prop-types';
import { CONTACT_INFO } from '../../../constants/data';
import Icon from "../../Icon";
import {ICONS} from "../../../constants/icons";
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const KEY_CONTACT = 'contact-element';
const COLOR_ICON = '#959595';
const SIZE_ICON = 15;

const CLASS_HEADER_ICONS = 'icons-header';
const CLASS_CONTACT_ELEMENT = 'contact-element flex-horizontal';
const CLASS_CLASS_DOTTED_DIVIDER = 'divider-dotted';
////////////////////////////////////////////////////////////////////////////////


/**
 * ContactRow component.
 *
 * Represents a contact element. Composed by an icon, the type of contact
 * information and the information itself.
 */
const ContactRow = ({ data }) => {
  let value = data.value;

  const isURL = data.value.includes('.com');
  const isMail = data.value.includes('@');
  if (isURL || isMail) {
    const hrefBase = isMail ? 'mailto:' : 'http://';
    value = <a href={ `${hrefBase}${value}` } target='_blank'>{ value }</a>;
  }

  return (
    <div className={CLASS_CONTACT_ELEMENT}>
      <Icon
        color={ COLOR_ICON }
        icon={ICONS[data.icon]}
        className={CLASS_HEADER_ICONS}
        size={ SIZE_ICON }
      />
      <strong>
        {data.title}
      </strong>
      <span className={CLASS_CLASS_DOTTED_DIVIDER}/>
      <span>
      { value }
    </span>
    </div>
  );
};

ContactRow.propTypes = {
  /** Contact row data, composed by the following fields */
  data: PropTypes.shape({
    /** Icon ID (used to call Icon component) */
    icon: PropTypes.string.isRequired,
    /** Short text describing the contact field (E-mail, phone numnber...) */
    title: PropTypes.string.isRequired,
    /** Contact data for actual field */
    value: PropTypes.string.isRequired,
  })
};

/**
 * Contact component.
 *
 * Return a list of ContactRow components, showing the list of contact
 * information.
 */
const Contact = () => (
  CONTACT_INFO.map((data, idx) => (
    <ContactRow
      data={ data }
      key={ `${KEY_CONTACT}-${idx}` }
    />
  ))
);

export default Contact;
