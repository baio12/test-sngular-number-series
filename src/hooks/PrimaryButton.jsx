import React from 'react';
import PropTypes from 'prop-types';

function PrimaryButton({ text, type }) {
    return (
        <button className='form__button' type={type}>
            { text }
        </button>
    )
}

PrimaryButton.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
}

PrimaryButton.defaultProps = {
    text: 'Calcular',
    type: 'Calcular'
}

export default PrimaryButton