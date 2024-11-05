import { useState } from 'react';
import './App.css'
import ImageSection from './components/ImageSection/ImageSection'
import MultiStep from './components/MultiStep/MultiStep';

const App = () => {
  // State for MultiStep form, ImageSection and Progress Bar
  const [step, setStep] = useState<number>(1);
  
  // Change step order
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