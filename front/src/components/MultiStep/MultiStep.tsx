import Introduction from "../Introduction/Introduction";

interface MultiStepProps {
  handleChangeStep : Function;
  step             : number;
}

const MultiStep = ({ handleChangeStep, step }: MultiStepProps) => {

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <Introduction handleChangeStep={handleChangeStep} />;
      // case 2:
        // return <Step2 />;
      // case 3:
        // return <Step3 />;
      // default:
        // return <Step1 />;
    }
  };
  
  return (
    renderStepContent()
  )
}

export default MultiStep