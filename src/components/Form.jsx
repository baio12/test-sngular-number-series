import React, { useState } from 'react';
import Input from '../hooks/Input';
import PrimaryButton from '../hooks/PrimaryButton';
import { NumberRegex } from "../util/regex";
import PropTypes from 'prop-types';

function Form({ setUserNumber }) {

    const [errors, setErrors] = useState(null);

    const submitData = e => {
        e.preventDefault();
        let err = {};

        const naturalNumber = e.target.elements.naturalNumber.value;

        const numRegex = new NumberRegex(naturalNumber).validateRegex();

        if(!numRegex) err.naturalNumber = 'Ingresa un número natural válido entre 0 y 9'

        if (Object.keys(err).length === 0) {
            setUserNumber(Number(naturalNumber));
        } else {
            setErrors(err);
        }
    }

    return (
        <form className="form" onSubmit={submitData}>
            <Input 
                label='Ingresa un número natural'
                needed
                type='text'
                inputMode='number'
                name='naturalNumber'
                id='naturalNumber'
                placeholder='3'
                autoComplete='off'
                onInput={ e => (new NumberRegex(e.target.value)) && setErrors(null) }
                error={errors?.naturalNumber}
            />
            <PrimaryButton 
                text='Calcular'
                type='submit'
            />
        </form>
    )
}

Form.propTypes = {
    setUserNumber: PropTypes.func.isRequired
}

export default Form