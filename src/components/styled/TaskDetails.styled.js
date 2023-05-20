import styled from "styled-components";

export const TaskDetailsStyle = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    .popup-task-title {
        font-size : ${({ theme }) => theme.heading400};
        font-weight: 700;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .popup-task-content {
        font-size:  ${({ theme }) => theme.body500};
        color:  ${({ theme }) => theme.colors.grey400};
        line-height: 23px;
    }
    .subtasks-title {
        color: ${({ theme }) => theme.colors.grey400};
        font-size: 12px;
        font-weight: 700;
    }
`;