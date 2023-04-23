import React from 'react';
import PropTypes from 'prop-types';

function Result({ result }) {
    return (
        <div className="result">
            <p className="result__item">
                Resultado: { result }
            </p>
        </div>
    )
}

Result.propTypes = {
    result: PropTypes.number
}

export default Result