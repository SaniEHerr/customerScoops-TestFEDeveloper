import styled from "styled-components";

export const IntroductionContainer = styled.section`
  padding-inline : 2rem;
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
    font-weight: 600;
  }

  input {
    background-color : transparent;
    border           : none;
    border-bottom    : 1px solid var(--primary-color);
    padding-bottom   : 0.5rem;
    outline          : none;
    transition       : border-color 0.3s ease;
    font-size        : 17px;
    color            : var(--primary-color);
    
    &::placeholder {
      opacity   : 0.4;
    }
  }

  button {
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
`