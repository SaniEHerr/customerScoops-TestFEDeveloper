interface PaginationProps {
  handleChangeStep : Function;
  step             : number;
}

const Pagination = ({ handleChangeStep, step }: PaginationProps) => {
  const prevStep = () => {
    if (step === 1) return;
    handleChangeStep(step - 1);
  };

  const nextStep = () => {
    if (step === 6) return;
    handleChangeStep(step + 1);
  };

  return (
    <div>
      {
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