import { Progress, ProgressBarContainer } from "./styled.components";

interface ProgressBarProps {
  step: number;
}

const ProgressBar = ({ step }: ProgressBarProps) => {
  // Calculate the width of the progress bar based on the current step (from 1 to 6)
  const progressWidth = (step / 6) * 100 + '%';

  return (
    <ProgressBarContainer>
      <Progress width={progressWidth} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;