import { useState } from 'react';
import { IntroductionContainer } from './styled.components'
import { useFormContext } from '../../contexts/FormContext';

interface IntroductionProps {
  handleChangeStep : Function;
}

const Introduction = ({ handleChangeStep }: IntroductionProps) => {
  const { userResponse, handleResponse } = useFormContext();

  // Local state to manage the input for the user's name
  const [inputName, setInputName] = useState(userResponse.name || "");

  // State to manage error message
  const [error, setError] = useState("");
  
  // Function to handle form submission, validate name length, and move to the next step
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputName.trim()) {
      setError("Por favor, ingrese su nombre para continuar");
    } else if (inputName.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
    } else if (inputName.length > 16) {
      setError("El nombre no puede exceder los 16 caracteres");
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