import styled from "styled-components";

export const StyledBoardList = styled.div`
    .title-board-list {
        color: ${({ theme }) => theme.colors.grey400};
        letter-spacing: 2.4px;
        padding: 0rem 0 0 1.5rem;
        margin-bottom: 19px;
    }
    
    .board-list-content {
        display: flex;
        flex-direction: column;
    }

    .board-element {
        color: ${({ theme }) => theme.colors.grey400};
        padding: 1rem 1rem 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 12px;
      
        &.selected {
          color: #fff;
          background-color: ${({ theme }) => theme.colors.purple400};
          border-radius: 0 100px 100px 0;
        }
  
        &.create-new-board {
          color: variables.$purple-400;
        }
    }
`;