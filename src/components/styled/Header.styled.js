import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
align-items: center;
width: 100vw;
min-height: ${({ theme }) => theme.header.minHeight};
padding: 1rem;
justify-content: space-between;
position: fixed;
top: 0;
z-index: 20;
background-color: ${({ theme }) => theme.colors.secondary};
.mobile-board-list {
  display: flex;
  align-items: center;
  gap: 10px;
}
`