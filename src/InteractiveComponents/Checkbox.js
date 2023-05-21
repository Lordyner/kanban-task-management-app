import React from 'react';
import { useState } from 'react';
import { StyledCheckbox } from '../components/styled/Checkbox.styled';
import useData from '../Hooks/useData';

const Checkbox = ({ label, checked }) => {

    const [isChecked, setIsChecked] = useState(checked);
    const { boards, setBoards } = useData();
    const { selectedBoard } = useData();
    return (
        <StyledCheckbox className={isChecked ? 'checked' : ''} >
            <label className='check-container'>
                <span className='checkbox-text'>{label}</span>
                <input type='checkbox'
                    checked={isChecked}
                    onClick={() => {
                        setIsChecked(!isChecked)

                    }} />
                <span className='checkmark'></span>
            </label>
        </StyledCheckbox>
    );
};

export default Checkbox;