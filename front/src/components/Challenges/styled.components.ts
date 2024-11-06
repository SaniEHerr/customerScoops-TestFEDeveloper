import styled from "styled-components";

export const ChallengesContainer = styled.section`
  color           : var(--primary-color);
  display         : flex;
  flex-direction  : column;
  gap             : 1rem;

  p {
    font-size   : 18px;
    font-weight : 300;

    @media (min-width: 1023px) {
      font-size : 19px;
    }
  }

  .challenges-grid {
    display               : grid;
    grid-template-columns : repeat(1, 1fr);
    gap                   : .5rem;

    @media (min-width: 1023px) {
      grid-template-columns : repeat(2, 1fr);
      width                 : 300px;
    }
  }
`

export const OptionsContainer = styled.div<{ $isSelected: boolean }>`
  padding          : 0.3rem;
  display          : flex;
  align-items      : center;
  gap              : 1rem;
  border-radius    : 2rem;
  border           : 1px solid var(--primary-color);
  cursor           : pointer;
  text-align       : start;
  background-color : ${props => props.$isSelected ? 'var(--primary-color)' : ''};
  border           : 1px solid ${props => props.$isSelected ? 'transparent' : 'var(--primary-color)'};
  color            : ${props => props.$isSelected ? '#F4F4F4' : ''};
  transition       : background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

  @media (min-width: 1023px) {
    width           : 180px;
    height          : 39px;
    justify-content : start;
    gap             : .5rem;
  }

  span {
    background-color : #00ccbc;
    color            : #f4f4f4;
    min-width        : 50.83px;
    min-height       : 30px;
    border-radius    : 2rem;
    font-size        : 10px;
    font-weight      : bolder;
    display          : flex;
    align-items      : center;
    justify-content  : center;

    @media (min-width: 1023px) {
      min-width  : 30px;
      min-height : 30px;
    }
  }

  p {
    font-size   : 11px;
  }
`;