import Introduction from "../Introduction/Introduction";
import UserPosition from "../UserPosition/UserPosition";
import Challenges from "../Challenges/Challenges";
import Crm from "../Crm/Crm";
import Industry from "../Industry/Industry";
import GoodbyeMessage from "../GoodbyeMessage/GoodbyeMessage";
import { useMemo } from "react";

interface StepContentProps {
  handleChangeStep : (stepNumber: number) => void;
  step             : number;
}

const StepContent = ({ handleChangeStep, step }: StepContentProps) => {
  // Memoize the step components to prevent unnecessary re-renders
  const stepComponents = useMemo(
    () => ({
      1: <Introduction handleChangeStep={handleChangeStep} />,
      2: <UserPosition />,
      3: <Challenges />,
      4: <Crm />,
      5: <Industry />,
      6: <GoodbyeMessage />,
    }),
    [handleChangeStep, step]
  );
  
  // Return the component corresponding to the current step, defaulting to Introduction if step is invalid
  return stepComponents[step as keyof typeof stepComponents] || <Introduction handleChangeStep={handleChangeStep} />;
};

export default StepContent;