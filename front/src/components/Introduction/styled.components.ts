import styled from "styled-components";

export const IntroductionContainer = styled.section`
  color          : var(--primary-color);
  display        : flex;
  flex-direction : column;
  gap            : 2rem;

  @media (min-width: 1023px) {
    width : 400px;
  }

  p {
    font-size   : 18px;
    font-weight : 300;
    line-height : 23.4px;

    @media (min-width: 1023px) {
      font-size : 19px;
      line-height : 24.7px;
    }
  }

  span {
    font-weight: 700;
  }

  form {
    display        : flex;
    flex-direction : column;
    gap            : 2rem;

    .input-container {
      position       : relative;
      border-bottom  : 1px solid var(--primary-color);
      padding-bottom : 0.3rem;

      @media (min-width: 1023px) {
        width : 340px;
      }

      p {
        position    : absolute;
        bottom      : -25px;
        left        : 0;
        font-size   : 12px;
        color       : red;
        font-weight : 600;
      }
    }

    input {
      background-color : transparent;
      border           : none;
      outline          : none;
      transition       : border-color 0.3s ease;
      font-size        : 17px;
      color            : var(--primary-color);
      width            : 100%;
      
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

      @media (min-width: 1023px) {
        width : 140px;
      }
    }
  }
`