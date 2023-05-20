import React from 'react';
import { useState } from 'react';
import { StyledCheckbox } from '../components/styled/Checkbox.styled';

const Checkbox = ({ subtask }) => {

    const [isChecked, setIsChecked] = useState(subtask.isCompleted)

    return (
        <StyledCheckbox className={isChecked ? 'checked' : ''} onClick={() => {
            setIsChecked(!isChecked)
            subtask.isCompleted = !isChecked;
        }}>
            <label className='check-container'>
                <span className='checkbox-text'>{subtask.title}</span>
                <input type='checkbox'
                    checked={isChecked} />
                <span className='checkmark'></span>
            </label>
        </StyledCheckbox>
    );
};

export default Checkbox;