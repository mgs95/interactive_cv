import React from 'react';
import LinkedInIcon from './images/icon_linkedin';
import GithubIcon from './images/icon_github';
import { SOCIAL_LINKS } from "../../../constants/data";
import PropTypes from 'prop-types';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'SocialLinksContainer';
const CLASS_LINK = 'SocialLink';
const CLASS_LINK_ICON = 'SocialLinkIcon';
////////////////////////////////////////////////////////////////////////////////


/**
 * SocialLink component.
 *
 * Represents an icon and an URL.
 */
const SocialLink = ({ Icon, url }) => (
  <div className={CLASS_LINK}>
    <Icon className={CLASS_LINK_ICON} width={16}/>
    <a href={ url } target='_blank'>{ url }</a>
  </div>
);

SocialLink.propTypes = {
  /** Icon component */
  Icon: PropTypes.func.isRequired,
  /** URL for a social website */
  url: PropTypes.string.isRequired
};

/**
 * SocialLinks component.
 *
 * Displays a couple of icons and URLs for some social website sites.
 */
const SocialLinks = () => {
  return (
    <div className={CLASS_CONTAINER}>
      <SocialLink Icon={ LinkedInIcon } url={ SOCIAL_LINKS.linkedin} />
      <SocialLink Icon={ GithubIcon } url={ SOCIAL_LINKS.github} />
    </div>
  )
};

export default SocialLinks;
