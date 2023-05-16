import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
align-items: center;
width: 100vw;
min-height: 4rem;
padding: 1rem;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.secondary};
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

`