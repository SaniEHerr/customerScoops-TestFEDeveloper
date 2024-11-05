import Introduction from "../Introduction/Introduction";
import UserPosition from "../UserPosition/UserPosition";
import Pagination from "../Pagination/Pagination";

interface MultiStepProps {
  handleChangeStep : Function;
  step             : number;
}

const MultiStep = ({ handleChangeStep, step }: MultiStepProps) => {

  // Set the view acording the step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <Introduction handleChangeStep={handleChangeStep} />;
      case 2:
        return <UserPosition />
      // case 3:
        // return <Step3 />;
      // default:
        // return <Step1 />;
    }
  };
  
  return (
    <>
      {renderStepContent()}
      <Pagination step={step} handleChangeStep={handleChangeStep} />
    </>
  )
}

export default MultiStep