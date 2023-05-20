import styled from "styled-components";

export const StyledCheckbox = styled.div`
    

    font-size: 12px;
    &:hover {
        background-color: hsl(242, 48%, 58%, .25);
    }
    &.checked {
        text-decoration: line-through;
        
        .checkbox-text {
            opacity: .5;
        }
    }

    label {
        display: block;
        position: relative;
        padding-left: 2rem;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: fit-content;
        
        &:hover {
            cursor: pointer;
        }
    }
          
    & input:checked~.checkmark {
        background-color: ${({ theme }) => theme.colors.purple400};
        border: 1px solid ${({ theme }) => theme.colors.purple400};
        
        // Display checkmark when input checked
        &:after {
            display: block;
        }
        
    }
          
    // Checkmark style
    .checkmark:after {
        left: 4px;
        top: 0;
        width: 7px;
        height: 11px;
        border: solid #fff;
        color: white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    input[type=checkbox] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        padding: 0;
    }


    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 1rem;
        width: 1rem;
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 1.3px solid rgba(130, 143, 163, 0.248914);
        border-radius: 2px;

        &:after {
            content: "";
            position: absolute;
            display: none;
    }
    } 
}`;