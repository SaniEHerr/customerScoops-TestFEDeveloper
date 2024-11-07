import { useState } from 'react';
import { IntroductionContainer } from './styled.components'
import { useFormContext } from '../../contexts/FormContext';
import { validateName } from '../../validator/validateName';

interface IntroductionProps {
  handleChangeStep: (stepNumber: number) => void;
}

const Introduction = ({ handleChangeStep }: IntroductionProps) => {
  const { userResponse, handleResponse } = useFormContext();
  const [inputName, setInputName] = useState(userResponse.name || "");
  const [error, setError] = useState("");
  
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errorMessage = validateName(inputName);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("");
      handleResponse("name", inputName);
      handleChangeStep(2);
    }
  };

  return (
      <IntroductionContainer>
        <p>
          Muchas gracias por tu interés en conocer <span>customerScoops</span>, que a través de Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad de tu negocio.
        </p>

        <p>
          Queremos conocerte, ¿cuál es tu nombre?
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <input
              onChange={(e) => setInputName(e.target.value)} 
              value={inputName} 
              placeholder='Nombre' 
            />
            {error && <p>{error}</p>}
          </div>
          
          <button type="submit">Comenzar</button>
        </form>
      </IntroductionContainer>
  )
}

export default Introduction