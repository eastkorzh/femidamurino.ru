import React from 'react';

import './styles.scss';

const Input = (props) => {
  const { label, img, type, name, className, handleChange, proximityStyle } = props;

  return (
    <div style={proximityStyle} className={`form__input ${className || ''}`}>
      {img && 
        <img src={require(`./img/${img}.svg`)} alt="" />
      }
      <input onChange={(e) => handleChange(e)} style={!img ? {paddingLeft: '17px'} : {}} name={name} type={type || 'text'} required/>
      <label style={!img ? {left: '15px'} : {}}>{label}</label>
    </div>
  )
}

export default Input;
