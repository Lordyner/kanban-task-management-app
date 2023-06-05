import React from 'react';
import { useState } from 'react';
import { StyledCheckbox } from '../components/styled/Checkbox.styled';

const Checkbox = ({ label, checked, updateState, id }) => {

    const [isChecked, setIsChecked] = useState(checked);

    return (
        <StyledCheckbox className={isChecked ? 'checked' : ''} >
            <label className='check-container'>
                <span className='checkbox-text'>{label}</span>
                <input type='checkbox'
                    checked={isChecked}
                    onChange={() => {
                        setIsChecked(!isChecked)
                        updateState({ id, completed: !isChecked, label });
                    }} />
                <span className='checkmark'></span>
            </label>
        </StyledCheckbox>
    );
};

export default Checkbox;