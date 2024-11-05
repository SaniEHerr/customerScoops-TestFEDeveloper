import { useState } from 'react';
import { IntroductionContainer } from './styled.components'

interface IntroductionProps {
  handleChangeStep : Function;
  handleResponse   : Function;
  name?            : string;
}

const Introduction = ({ handleChangeStep, handleResponse, name }: IntroductionProps) => {
  // State for control name
  const [inputName, setInputName] = useState(name);
  
  // Control the sending of the response and change the step
  const handleSubmit = () => {
    handleResponse(inputName, "name");
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

      <input onChange={(e) => setInputName(e.target.value)} defaultValue={name} type="text" placeholder='Nombre' />

      <button onClick={handleSubmit}>Comenzar</button>
    </IntroductionContainer>
  )
}

export default Introduction