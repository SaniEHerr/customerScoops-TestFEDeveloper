import styled from "styled-components";

export const ImageSectionContainer = styled.section`
  display         : flex;
  align-items     : center;
  position        : relative;
  justify-content : end;
  max-width       : 100%;

  .section-image {
    width      : 100%;
    height     : auto;
    max-width  : 364px;
    max-height : 213px;

    @media (min-width: 1024px) {
      width      : 100%;
      height     : auto;
      max-width  : 635px;
      max-height : 655px;
    }
  }

  .logo-image {
    position   : absolute;
    right      : 220px;
    width      : 100%;
    height     : auto;
    max-width  : 100px;
    max-height : 36.44px;
    min-width  : 50px;
    display    : block;

    /* Small devices */
    @media (max-width: 330px) {
      right : 200px;
    }

    @media (min-width: 1023px) {
      display: none;
    }
  }

  div {
    position      : absolute;
    top           : 15px;
    right         : 15px;
    display       : flex;
    justify-items : center;
    align-items   : start;
    gap           : .5rem;
    color         : var(--primary-color);

    .step {
      font-size   : 21px;
      line-height : 15px;
      font-family : 'SF Pro Display', sans-serif;
      font-weight : 600;
    }

    .line {
      width            : 1.5px;
      height           : 26.24px;
      font-family      : 'SF Pro Display', sans-serif;
      background-color : var(--primary-color);
    }

    span {
      font-size   : 13px;
      font-family : 'SF Pro Display', sans-serif;
      font-weight : 400;
    }
  }
`


  /* @media (min-width: 768px) {
    .section-image {
      max-width: 600px;
    }

    .logo-image {
      max-width: 150px;
    }
  } */
  
  /* @media (min-width: 1024px) {
    .section-image {
      max-width: 700px;
    }

    .logo-image {
      max-width: 180px;
    }
  } */