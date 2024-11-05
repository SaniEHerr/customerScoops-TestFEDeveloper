import OptionButton from "../OptionButton/OptionButton"

interface UserPositionProps {
  name ?           : string;
  position ?       : string;
  handleResponse   : Function;
}

const UserPosition = ({ name, handleResponse, position }: UserPositionProps) => {
  return (
    <div>
      <p>
        Genial {name}, ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:
      </p>

      <p>
        ¿Cuál es tu cargo/posición dentro de tu empresa?
      </p>

      <OptionButton 
        category={"position"} 
        handleChangeValue={handleResponse} 
        value="Board member" 
        isSelected={position === "Board member"}
      />

      <OptionButton 
        category={"position"} 
        handleChangeValue={handleResponse} 
        value="Board member 2" 
        isSelected={position === "Board member 2"}
      />

      <OptionButton 
        category={"position"} 
        handleChangeValue={handleResponse} 
        value="Board member 3" 
        isSelected={position === "Board member 3"}
      />

      <OptionButton 
        category={"position"} 
        handleChangeValue={handleResponse} 
        value="Board member 4" 
        isSelected={position === "Board member 4"}
      />
    </div>
  )
}

export default UserPosition