import styled from "styled-components";

export const OptionButtonContainer = styled.button<{ isSelected: boolean }>`
  padding       : .5rem 1rem;
  border-radius : .5rem;
  border-color  : var(--primary-color);
  color         : var(--primary-color);
  background-color: ${({ isSelected }) => isSelected ? "red" : "transparent"};

  &:hover {
    background-color: ${({ isSelected }) => isSelected ? "red" : "lightgray"};
  }
`;