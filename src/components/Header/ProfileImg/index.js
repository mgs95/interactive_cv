import React from 'react';
import './index.css';

/////////////////                  CONSTANTS                   /////////////////
const CLASS_CONTAINER = 'profileImgContainer';
const CLASS_MAIN_CIRCLE = 'profileImgMainCircle';
const CLASS_CIRCLE_BORDER_1 = 'circleBorder1';
const CLASS_CIRCLE_BORDER_2 = 'circleBorder2';
const CLASS_CIRCLE_BORDER_3 = 'circleBorder3';
////////////////////////////////////////////////////////////////////////////////


/**
 * ProfileImg component.
 *
 * Displays a circle with a profile image and some borders.
 */
const ProfileImg = () => {
  const profileImage = {
    backgroundImage: 'url(ProfileImage.png)'
  };

  return (
    <div className={CLASS_CONTAINER}>
      <div className={CLASS_MAIN_CIRCLE} style={profileImage}/>
      <div className={CLASS_CIRCLE_BORDER_1} />
      <div className={CLASS_CIRCLE_BORDER_2} />
      <div className={CLASS_CIRCLE_BORDER_3} />
    </div>
  )
};

export default ProfileImg;
