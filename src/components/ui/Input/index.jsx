import React from 'react';

import './styles.scss';

const Input = (props) => {
  const { label, img, type, name, className, handleChange, isValid, proximity, submitClicked } = props;

  const redShadow = (isValid, proximity) => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice ) { 
      return {
        boxShadow: isValid ? 'none' : `inset 0 0 5px 1px rgba(229, 51, 51, ${proximity})`,
      }
    } else {
      return {
        boxShadow: !isValid && submitClicked ? 'inset 0 0 5px 1px rgba(229, 51, 51, 1)' : 'none',
      }
    }
  }

  return (
    <div style={redShadow(isValid, proximity)} className={`form__input ${className || ''}`}>
      {img && 
        <img src={require(`./img/${img}.svg`)} alt="" />
      }
      <input onChange={(e) => handleChange(e)} style={!img ? {paddingLeft: '17px'} : {}} name={name} type={type || 'text'} required/>
      <label style={!img ? {left: '15px'} : {}}>{label}</label>
    </div>
  )
}

export default Input;
