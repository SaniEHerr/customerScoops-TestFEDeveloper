import styled from "styled-components";

export const CrmContainer = styled.section`
  color          : var(--primary-color);
  display        : flex;
  flex-direction : column;
  gap            : 2rem;

  p {
    font-size   : 18px;
    font-weight : 300;
    line-height : 23.4px;
  }

  span {
    font-weight: 700;
  }

  .crms-grid {
    display               : grid;
    grid-template-columns : repeat(2, 1fr);
    row-gap               : .5rem;
    column-gap            : .5rem;
  }
`