import { useState } from "react";
import Introduction from "../Introduction/Introduction";
import UserPosition from "../UserPosition/UserPosition";
import Pagination from "../Pagination/Pagination";

interface MultiStepProps {
  handleChangeStep : Function;
  step             : number;
}

interface userReponseData {
  name      ?: string;
  position  ?: string;
  challenge ?: string;
  crm       ?: string;
  category  ?: string;
}

const MultiStep = ({ handleChangeStep, step }: MultiStepProps) => {
  // State for control user response
  const [userResponse, setUserResponse] = useState<userReponseData>({
    name      : '',
    position  : '',
    challenge : '',
    crm       : '',
    category  : '',
  })

  // Set a response according to the category
  const handleResponse = (response: string, category: string) => {
    setUserResponse((prevResponses) => ({
      ...prevResponses,
      [category]: response,
    }));
  };

  // Set the content acording the step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <Introduction name={userResponse.name} handleChangeStep={handleChangeStep} handleResponse={handleResponse} />;
      case 2:
        return <UserPosition name={userResponse.name} />
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