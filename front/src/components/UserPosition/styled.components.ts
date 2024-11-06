import styled from "styled-components";

export const UserPositionContainer = styled.section`
  padding-inline : 2rem;
  color          : var(--primary-color);
  display        : flex;
  flex-direction : column;
  gap            : 2rem;

  .positions-grid {
    display               : grid;
    grid-template-columns : repeat(2, 1fr);
    row-gap               : .5rem;
    column-gap            : .5rem;
  }
`