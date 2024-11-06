import styled from "styled-components";

export const ImageSectionContainer = styled.section`
  display         : flex;
  align-items     : center;
  position        : relative;
  justify-content : end;
  max-width       : 100%;

  .section-image-default {
    width      : 100%;
    height     : auto;
    max-width  : 100%;
    max-height : auto;

    @media (max-width: 1023px) {
      align-self   : flex-start;
      margin-right : -10px;
    }

    @media (min-width: 1024px) {
      width        : 100%;
      max-width    : 635px;
      margin-right : 0;
    }
  }

  .section-image-step6 {
    width        : 100%;
    max-width    : 435px;
    margin-right : 7.5rem;
  }

  .logo-image {
    position   : absolute;
    width      : 100%;
    height     : auto;
    max-width  : 100px;
    max-height : 36.44px;
    min-width  : 50px;
    display    : block;
    left       : 15%;
    top        : 45%;
  }

  div {
    position      : absolute;
    top           : 7%;
    right         : 3%;
    display       : flex;
    justify-items : center;
    align-items   : start;
    gap           : .5rem;
    color         : var(--primary-color);

    @media (min-width: 1024px) {
      top   : 12%;
      right : 3%;
    }

    &.container-step6 {
      @media (min-width: 1024px) {
        top   : -3px;
        right : 5%;
      }
    }

    &.container-step6 {
      @media (min-width: 1240px) {
        top   : -3px;
        right : 8.5%;
      }
    }

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