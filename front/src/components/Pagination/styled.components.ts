import styled from "styled-components";

export const PaginationContainer = styled.div`
  display         : flex;
  gap             : .5rem;
  justify-content : start;
  align-items     : center;
  width           : 100%;

  .next-button {
    width            : 100px;
    height           : 35px;
    font-weight      : 500px;
    border-radius    : 2rem;
    font-size        : 11px;
    background-color : var(--primary-color);
    color            : #F4F4F4;
    display          : flex;
    align-items      : center;
    justify-content  : center;
    white-space      : nowrap;
    border           : none;
    /* transition       : background-color 0.3s ease, border 0.3s ease, color 0.3s ease; */

    &:disabled {
      background-color : #F4F4F4;
      color            : var(--primary-color);
      border           : 1px solid var(--primary-color);
    }
  }

  .prev-button {
    border           : 1px solid var(--primary-color);
    background-color : #F4F4F4;
    border-radius    : 100%;
    width            : 35px;
    height           : 35px;

    svg {
      width  : 20px;
      height : 20px;
    }

    path {
      stroke: var(--primary-color);
    }
  }
`