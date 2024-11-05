import { useState } from 'react';
import { IntroductionContainer } from './styled.components'
import { useFormContext } from '../../contexts/FormContext';

interface IntroductionProps {
  handleChangeStep : Function;
}

const Introduction = ({ handleChangeStep }: IntroductionProps) => {
  // State for control name
  const { userResponse, handleResponse } = useFormContext();
  const [inputName, setInputName] = useState(userResponse.name);
  
  // Control the sending of the response and change the step
  const handleSubmit = () => {
    handleResponse("name", inputName || "");
    handleChangeStep(2);
  }

  return (
    <IntroductionContainer>
      <p>
        Muchas gracias por tu interés en conocer customerScoops, que a través de Formularios Conversacionales Inteligente te ayudamos 
        a aumentar el revenue y rentabilidad de tu negocio.
      </p>

      <p>
        Queremos conocerte, ¿cuál es tu nombre?
      </p>

      <input onChange={(e) => setInputName(e.target.value)} value={inputName || ''} placeholder='Nombre' />
      <button onClick={handleSubmit}>Comenzar</button>
    </IntroductionContainer>
  )
}

export default Introduction