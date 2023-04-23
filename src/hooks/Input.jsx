import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, needed, type, name, id, placeholder, error, ...rest }) {
    return (
        
        <div>
            {label && (
                <label htmlFor={id} className="form__label">
                    {label}
                    {needed && <span className='form__label--needed'>*</span>}
                </label>
            )}
            <div className="form__divInput">
                <input
                    type={type}
                    name={name}
                    id={id}
                    className={`form__input ${error && 'form__input-error'}`}
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
            <span className='form__text--error'>{error}</span>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    needed: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
}

Input.defaultProps = {
    needed: false,
    type: 'text'
}

export default Input;