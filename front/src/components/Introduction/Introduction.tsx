import { IntroductionContainer } from './styled.components'

interface IntroductionProps {
  handleChangeStep : Function;
}

const Introduction = ({ handleChangeStep }: IntroductionProps) => {
  return (
    <IntroductionContainer>
      <p>
        Muchas gracias por tu interés en conocer customerScoops, que a través de Formularios Conversacionales Inteligente te ayudamos 
        a aumentar el revenue y rentabilidad de tu negocio.
      </p>

      <p>
        Queremos conocerte, ¿cuál es tu nombre?
      </p>

      <input type="text" placeholder='Nombre' />

      <button onClick={() => handleChangeStep(2)}>Comenzar</button>
    </IntroductionContainer>
  )
}

export default Introduction