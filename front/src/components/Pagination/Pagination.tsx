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
    <div>
      {
        // Only show pagination buttons if the current step is not 1
        step !== 1 &&
        <>
          <button disabled={step === 1} onClick={prevStep}>Anterior</button>
          <button disabled={step === 6} onClick={nextStep}>Siguiente</button>
        </>
      }
    </div>
  )
}

export default Pagination