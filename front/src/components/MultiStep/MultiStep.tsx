import Introduction from "../Introduction/Introduction";
import UserPosition from "../UserPosition/UserPosition";
import Pagination from "../Pagination/Pagination";
import Challenges from "../Challenges/Challenges";
import Crm from "../Crm/Crm";
import Industry from "../Industry/Industry";
import GoodbyeMessage from "../GoodbyeMessage/GoodbyeMessage";

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
      case 3:
        return <Challenges />;
      case 4:
        return <Crm />;
      case 5:
        return <Industry />;
      case 6:
        return <GoodbyeMessage />;
      default:
        return <Introduction handleChangeStep={handleChangeStep} />;
    }
  };
  
  return (
    <section className="wrapper">
      {renderStepContent()}
      <Pagination step={step} handleChangeStep={handleChangeStep} />
    </section>
  )
}

export default MultiStep