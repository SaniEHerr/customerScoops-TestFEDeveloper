import styled from "styled-components";

export const IndustryContainer = styled.section`
  color          : var(--primary-color);
  display        : flex;
  flex-direction : column;
  gap            : 2rem;

  @media (min-width: 1024px) {
    width : 400px;
  }

  .description-container {
    display        : flex;
    flex-direction : column;
    
    p {
      font-size   : 18px;
      font-weight : 300;

      @media (min-width: 1024px) {
        font-size : 19px;
      }
    }
  
    span {
      font-size   : 18px;
      font-weight : 700;

      @media (min-width: 1024px) {
        font-size : 19px;
      }
    }
  }

  .industries-grid {
    display               : grid;
    grid-template-columns : repeat(2, 1fr);
    row-gap               : .5rem;
    column-gap            : .5rem;

    @media (min-width: 1024px) {
      grid-template-columns : repeat(3, 1fr);
    }
  }
`