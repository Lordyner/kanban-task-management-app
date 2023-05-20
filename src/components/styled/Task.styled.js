import styled from "styled-components";

export const StyleTask = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 23px 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
    min-width: 280px;
    height: 88px;   
    justify-content: center;

    .popup-task {
        background-color: ${({ theme }) => theme.colors.secondary};
        min-width: 343px;
        max-width: 343px;
        min-height: 560px;
        position: absolute;
        top: 10rem;
        border-radius: 8px;
        padding: 1.5rem;
        transition: display 10.3s;

       

    }
    
    .task-content {
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: ${({ theme }) => theme.colors.grey400};
        font-size: ${({ theme }) => theme.body400};

        .task-title {
            color: ${({ theme }) => theme.text};
            font-size:  ${({ theme }) => theme.heading300};
            font-weight: 700;
        }
    }

`;