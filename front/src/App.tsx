import { useState } from 'react';
import './App.css'
import ImageSection from './components/ImageSection/ImageSection'
import Introduction from './components/Introduction/Introduction'
import MultiStep from './components/MultiStep/MultiStep';

const App = () => {
  const [step, setStep] = useState<number>(1);

  const handleChangeStep = (stepNumber: number) => {
    setStep(stepNumber);
  }

  return (
    <main>
      <ImageSection step={step} />
      <MultiStep 
        handleChangeStep={handleChangeStep}
        step={step}
      />
    </main>
  )
}

export default App