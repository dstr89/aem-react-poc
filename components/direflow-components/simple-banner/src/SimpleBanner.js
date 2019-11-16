import React from 'react';
import { Styled } from 'direflow-component';
import { propTypes } from './componentProperties';
import styles from './SimpleBanner.css';

const SimpleBanner = (props) => {
  const dynamicStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    color: `${props.textColor}`
  };

  return (
    <Styled styles={styles}>
      <div className='app' style={dynamicStyle}>
        <div className='header-title'>{props.title}</div>
      </div>
    </Styled>
  );
};

SimpleBanner.propTypes = propTypes;

export default SimpleBanner;

