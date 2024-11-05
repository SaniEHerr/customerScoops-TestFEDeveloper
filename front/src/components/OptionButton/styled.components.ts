import styled from "styled-components";

export const OptionButtonContainer = styled.div<{ isSelected: boolean }>`
  padding: 10px;
  background-color: ${({ isSelected }) => (isSelected ? "red" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  border: 2px solid ${({ isSelected }) => (isSelected ? "red" : "gray")};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "darkred" : "lightgray")};
  }
`;
