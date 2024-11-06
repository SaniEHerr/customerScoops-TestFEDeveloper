import { useState } from 'react';
import './App.css'
import ImageSection from './components/ImageSection/ImageSection'
import MultiStep from './components/MultiStep/MultiStep';
import { FormProvider } from './contexts/FormContext';
import ProgressBar from './components/ProgressBar/ProgressBar';

const App = () => {
  // State for MultiStep form, ImageSection and Progress Bar
  const [step, setStep] = useState<number>(1);
  
  // Change step order
  const handleChangeStep = (stepNumber: number) => {
    setStep(stepNumber);
  }

  return (
    <FormProvider>
      <main>
        <ProgressBar step={step} />
        <div className='content-wraper'>
          <ImageSection step={step} />
          <MultiStep handleChangeStep={handleChangeStep} step={step} />
        </div>
      </main>
    </FormProvider>
  )
}

export default App