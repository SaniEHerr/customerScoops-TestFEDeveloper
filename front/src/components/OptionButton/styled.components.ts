// styled.components.ts
import styled from 'styled-components';

export const OptionButtonContainer = styled.div<{ $isSelected: boolean }>`
  /* padding          : 1rem 2rem; */
  background-color : ${props => props.$isSelected ? 'var(--primary-color)' : ''};
  min-width        : 148px;
  min-height       : 39px;
  border-radius    : 2rem;
  border           : 1px solid ${props => props.$isSelected ? 'transparent' : 'var(--primary-color)'};
  color            : ${props => props.$isSelected ? '#F4F4F4' : ''};
  cursor           : pointer;
  font-size        : 11px;
  text-align       : center;
  display          : flex;
  align-items      : center;
  justify-content  : center;
  white-space      : nowrap;
  transition       : background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
`;