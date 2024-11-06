import { GoodbyeMessageContainer } from "./styled.components"

const GoodbyeMessage = () => {
  return (
    <GoodbyeMessageContainer>
      <div className="description-container">
        <span>Muchas Gracias</span>
        <p>por querer ser parte</p>
        <p>de la familia Scoopers.</p>
      </div>

      <p>Nos vemos pronto!</p>

      <a href="https://www.customerscoops.com/">
        <button>Finalizar</button>
      </a>
    </GoodbyeMessageContainer>
  )
}

export default GoodbyeMessage