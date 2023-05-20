import styled from "styled-components";

export const StyleMobileBoardList = styled.div`
 .mobile-board-list {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .popup-board-list {
    background-color: ${({ theme }) => theme.colors.secondary};
    min-width: 16.5rem;
    min-height: 20.125rem;
    position: absolute;
    top: 1rem;
    left: 4rem;
    border-radius: 8px;
    padding: 1.5rem 1.5rem 1.5rem 0;
    transition: display 10.3s;
    z-index: 100;
  }
`;