import styled from "styled-components";

export const ImageSectionContainer = styled.section`
  display         : flex;
  align-items     : center;
  position        : relative;
  justify-content : end;

  .section-image {
    position : absolute;
    right    : 220px;
  }

  div {
    position      : absolute;
    top           : 15px;
    right         : 15px;
    display       : flex;
    justify-items : center;
    align-items   : start;
    gap           : .5rem;
    color         : #231331;

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
      background-color : #231331;
    }

    span {
      font-size   : 13px;
      font-family : 'SF Pro Display', sans-serif;
      font-weight : 400;
    }
  }
`