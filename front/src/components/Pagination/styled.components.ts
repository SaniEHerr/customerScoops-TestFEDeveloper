import styled from "styled-components";

export const PaginationContainer = styled.div`
  display         : flex;
  gap             : .5rem;
  justify-content : start;
  align-items     : center;
  padding-inline  : 2rem;
  width: 100%;

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