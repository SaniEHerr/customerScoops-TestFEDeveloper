import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import StepContent from "../StepContent/StepContent";

interface MultiStepProps {
  handleChangeStep : (stepNumber: number) => void;
  step             : number;
}

const MultiStep = ({ handleChangeStep, step }: MultiStepProps) => {
  const [animationClass, setAnimationClass] = useState("step-content");

  // Effect that activates when the step changes, managing the exit and entry animation
  useEffect(() => {
    setAnimationClass("step-exit");

    const timer = setTimeout(() => {
      setAnimationClass("step-content");
    }, 500);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <section className={`wrapper ${step === 6 ? 'wrapper-step6' : ""}`}>
      <div className={animationClass}>
        <img className='logo-image' src="/logoDesktop.png" alt="CustomerScoops Logo" />

        <div className="content-container">
          <StepContent step={step} handleChangeStep={handleChangeStep} />
          <Pagination step={step} handleChangeStep={handleChangeStep} />
        </div>
      </div>
    </section>
  );
};

export default MultiStep;