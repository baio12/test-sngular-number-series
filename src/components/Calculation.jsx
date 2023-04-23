import React, { useEffect } from 'react';
import { NumberCalculation } from "../logic/numberCalculation";
import PropTypes from 'prop-types';

function Calculation({ userNumber, setResult }) {

    useEffect(() => {
        if(userNumber !== null) {
            const numberCalculation = new NumberCalculation(userNumber);
            setResult(numberCalculation.data.result);
            console.log(numberCalculation.data.series);
        }
        return () => {
            setResult(0);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userNumber]);
    
    return (<></>)
}

Calculation.propTypes = {
    series: PropTypes.object,
    setResult: PropTypes.func.isRequired
}

export default Calculation