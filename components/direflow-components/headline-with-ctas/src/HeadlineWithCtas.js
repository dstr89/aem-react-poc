import React from 'react';
import { Styled } from 'direflow-component';
import { propTypes } from './componentProperties';
import styles from './HeadlineWithCtas.css';

const HeadlineWithCtas = (props) => {
  const openUrl = (url) => {
    window.open(url, "_blank")
  };

  const renderButtons = props.ctas.map((button) => (
    <button key={button.text} className='button' onClick={() => openUrl(button.url)}>
        {button.text}
    </button>
  ));

  return (
    <Styled styles={styles}>
      <div className='app'>
        <div className='header-title'>{props.title}</div>
        <div className='sub-title'>{props.subTitle}</div>
        <div className='button-list'>
          {renderButtons}
        </div>
      </div>
    </Styled>
  );
};

HeadlineWithCtas.propTypes = propTypes;

export default HeadlineWithCtas;
