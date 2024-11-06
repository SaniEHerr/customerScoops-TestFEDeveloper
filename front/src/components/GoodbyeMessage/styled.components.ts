import styled from "styled-components";

export const GoodbyeMessageContainer = styled.section`
  color                 : var(--primary-color);
  display               : flex;
  flex-direction        : column;
  gap                   : 2rem;
  min-width             : 304px;

  @media (min-width: 1024px) {
    width : 400px;
  }

  .description-container {
    display        : flex;
    flex-direction : column;
    font-size      : 30px;
  
    span {
      font-weight: 700;
    }

    p {
      font-style : normal;

      @media (min-width: 1024px) {
        font-size : 30px;
      }
    }
  }

  p {
    font-weight : 300;
    font-size   : 20px;
    font-style  : italic;
  }

  a {
    text-decoration : none;
  }
  

  button {
    width            : 140px;
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