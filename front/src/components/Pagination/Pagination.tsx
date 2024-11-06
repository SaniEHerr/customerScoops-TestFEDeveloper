import ArrowSmLeft from "../../assets/icons/ArrowSmLeft";
import { PaginationContainer } from "./styled.components";

interface PaginationProps {
  handleChangeStep : Function;
  step             : number;
}

const Pagination = ({ handleChangeStep, step }: PaginationProps) => {
  // Function to handle moving to the previous step
  const prevStep = () => {
    if (step === 1) return;
    handleChangeStep(step - 1);
  };

  // Function to handle moving to the next step
  const nextStep = () => {
    if (step === 6) return;
    handleChangeStep(step + 1);
  };

  return (
    <PaginationContainer>
      {
        // Only show pagination buttons if the current step is not 1 or 6
        step !== 1 && step !== 6 && (
          <>
            <button className="prev-button" disabled={step === 1} onClick={prevStep}>
              <ArrowSmLeft />
            </button>
            <button className="next-button" disabled={step === 6} onClick={nextStep}>Siguiente</button>
          </>
        )
      }
    </PaginationContainer>
  )
}

export default Pagination