import styled from "styled-components";

export const StyleColumn = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70%;
    //z-index: -1;
    
    .column-name {
        color: ${({ theme }) => theme.colors.grey400};
        font-size: ${({ theme }) => theme.heading200};
        text-transform: uppercase;
        letter-spacing: 2.4px;
    }
    .dot {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        display: inline-block;
    }
    .column-title {
        display: flex;
        align-items: center;
        gap: 1rem;
        .weird-blue {
            background-color: #49C4E5;
        }
    }
`;