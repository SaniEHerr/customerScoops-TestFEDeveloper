import styled from "styled-components";

export const PaginationContainer = styled.div`
  display         : flex;
  gap             : .5rem;
  justify-content : start;
  align-items     : center;
  width           : 100%;

  @media (min-width: 1240px) {
    margin-left : -47px;
    gap         : .8rem;
  }

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
    position         : relative;
    cursor           : pointer;

    @media (min-width: 1023px) {
      width : 140px;
    }

    &:disabled {
      background-color : #F4F4F4;
      color            : var(--primary-color);
      border           : 1px solid var(--primary-color);
    }

    svg {
      width    : 20px;
      height   : 20px;
      display  : none;
      position : absolute;
      right    : 20px;


      @media (min-width: 1023px) {
        display : flex;
      }
    }

    path {
      stroke: #13847B;
    }
  }

  .prev-button {
    border           : 1px solid var(--primary-color);
    background-color : #F4F4F4;
    border-radius    : 100%;
    width            : 35px;
    height           : 35px;
    cursor           : pointer;

    svg {
      width  : 20px;
      height : 20px;
    }

    path {
      stroke: var(--primary-color);
    }
  }
`