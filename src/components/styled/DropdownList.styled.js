import styled from "styled-components";

export const StyledDropdownList = styled.label`

    position: relative;
    &:after {
        content:'>';
        font:11px "Consolas", monospace;
        color: ${({ theme }) => theme.colors.purple400};
        -webkit-transform:rotate(90deg);
        -moz-transform:rotate(90deg);
        -ms-transform:rotate(90deg);
        transform:rotate(90deg);
        right:8px; top:2px;
        padding:0 0 2px;
        font-size: 17px;
        position:absolute;
        pointer-events:none;
        top: 7px;
    }
    &:before {
        content:'';
        right:6px; 
        top:0px;
        width:20px; 
        height:20px;
        position:absolute;
        pointer-events:none;
        display:block;
    }
    select {
        width: 100%;
        border: 1px solid hsl(216, 15%, 57%, .25); 
        padding-left: 1rem;
        padding-top: 9px;
        padding-bottom: 9px;
        font-size: ${({ theme }) => theme.body500};
        margin: 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        outline:none;
        display: inline-block;
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none;
        cursor:pointer;
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.text};
    }
`;