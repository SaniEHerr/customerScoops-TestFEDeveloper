import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import StepContent from "../StepContent/StepContent";

interface MultiStepProps {
  handleChangeStep: (stepNumber: number) => void;
  step: number;
}

const MultiStep = ({ handleChangeStep, step }: MultiStepProps) => {
  const [currentStep, setCurrentStep] = useState(step);
  const [isExiting, setIsExiting] = useState(false);
  const [showPagination, setShowPagination] = useState(true);

  useEffect(() => {
    if (currentStep !== step) {
      setIsExiting(true);
      setShowPagination(false);

      const timer = setTimeout(() => {
        setCurrentStep(step);
        setIsExiting(false);
        setShowPagination(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <section className={`wrapper ${step === 6 ? 'wrapper-step6' : ""}`}>
      <div className="content-container">
        <img className='logo-image' src="/logoDesktop.png" alt="CustomerScoops Logo" />
        <div className={`step-content ${isExiting ? 'exit' : 'enter'}`}>
          <StepContent step={currentStep} handleChangeStep={handleChangeStep} />
        </div>
        {showPagination && (
          <div className={`pagination ${isExiting ? 'exit' : 'enter'}`}>
            <Pagination step={step} handleChangeStep={handleChangeStep} />
          </div>
        )}
      </div>
    </section>
  );
};

export default MultiStep;