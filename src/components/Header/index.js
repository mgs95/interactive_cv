import React from 'react';
import { connect } from 'react-redux';
import ProfileImg from './ProfileImg/';
import SocialLinks from './SocialLinks/';
import NameAndAdditionalInfo from './NameAndAdditionalInfo';
import Contact from './Contact';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_HEADER = 'flex-horizontal header';
const CLASS_COL_1 = 'column-1';
const CLASS_COL_2 = 'column-2';
////////////////////////////////////////////////////////////////////////////////


/**
 * Header component.
 *
 * Shows the header of the website. Includes a profile name and image and some
 * contact information such as email, phone number, website...
 */
const Header = () => {
  return(
    <header className={ CLASS_HEADER }>
      <ProfileImg />
      <SocialLinks />
      <div className={ CLASS_COL_1 }>
        <NameAndAdditionalInfo />
      </div>
      <div className={ CLASS_COL_2 }>
        <Contact />
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
