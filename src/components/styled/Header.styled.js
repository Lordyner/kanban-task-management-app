import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
align-items: center;
width: 100vw;
min-height: 4rem;
padding: 1rem;
justify-content: space-between;
background-color: ${({ theme }) => theme.header.background};
.mobile-board-list {
  display: flex;
  align-items: center;
  gap: 10px;
}
.popup-board-list {
  background-color: #fff;
  min-width: 16.5rem;
  min-height: 20.125rem;
  position: absolute;
  top: 5rem;
  left: 4rem;
  border-radius: 8px;
  padding: 1.5rem 1.5rem 1.5rem 0;
  transition: display 10.3s;
}

.title-board-list {
  color: variables.$grey-400;
  letter-spacing: 2.4px;
  padding: 0rem 0 0 1.5rem;
  margin-bottom: 19px;
}

.board-list-content {
  display: flex;
  flex-direction: column;
}

.board-element {
  color: variables.$grey-400;
  padding: 1rem 1rem 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;

  &.selected {
    color: #fff;
    background-color: variables.$purple-400;
    border-radius: 0 100px 100px 0;
  }



  &.create-new-board {
    color: variables.$purple-400;
  }
}
`