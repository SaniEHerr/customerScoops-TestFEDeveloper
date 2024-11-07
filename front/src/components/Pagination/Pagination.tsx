import ArrowSmLeft from "../../assets/icons/ArrowSmLeft";
import ArrowSmRight from "../../assets/icons/ArrowSmRight";
import { useFormContext } from "../../contexts/FormContext";
import { PaginationContainer } from "./styled.components";

interface PaginationProps {
  handleChangeStep  : Function;
  step              : number;
}

// const Pagination = ({ handleChangeStep, step, isNextEnabled = true }: PaginationProps) => {
const Pagination = ({ handleChangeStep, step }: PaginationProps) => {
  const { userResponse } = useFormContext();
  const isNextEnabled = 
    (step === 2 && Boolean(userResponse.position)) ||
    (step === 3 && Boolean(userResponse.challenge)) ||
    (step === 4 && Boolean(userResponse.crm)) ||
    (step === 5 && Boolean(userResponse.industry))
  ; 

  // Function to handle moving to the previous step
  const prevStep = () => {
    if (step > 1) handleChangeStep(step - 1);
  };

  // Function to handle moving to the next step
  const nextStep = () => {
    if (step < 6 && isNextEnabled) handleChangeStep(step + 1);
  };

  return (
    <PaginationContainer>
      {
        // Only show pagination buttons if the current step is not 1 or 6
        step !== 1 && step !== 6 && (
          <>
            <button 
              className="prev-button" 
              disabled={step === 1} 
              onClick={prevStep}
            >
              <ArrowSmLeft />
            </button>
            
            <button 
              className="next-button" 
              disabled={!isNextEnabled} 
              onClick={nextStep}
            >
              Siguiente
              <ArrowSmRight />
            </button>
          </>
        )
      }
    </PaginationContainer>
  )
}

export default Pagination