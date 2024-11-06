import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width            : 100%;
  height           : 10px;
  background-color : #F4F4F4;
  box-shadow       : 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Progress = styled.div<{ width: string }>`
  height           : 100%;
  width            : ${({ width }) => width};
  background-color : var(--primary-color);
  transition       : width 0.3s ease;
`;