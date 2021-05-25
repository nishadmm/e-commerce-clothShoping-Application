import React from 'react';

import './FormInput.style.scss'

const FormInput = ({ label, handleChange, ...othrtProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...othrtProps} />
      {label && (
        <label
          htmlFor={othrtProps.name}
          className={`form-input-label ${othrtProps.value.length ? 'shrink' : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
