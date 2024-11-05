import { useFormContext } from "../../contexts/FormContext";
import OptionButton from "../OptionButton/OptionButton"

const UserPosition = () => {
  const { userResponse, handleResponse } = useFormContext();
  
  return (
    <div>
      <p>
        Genial {userResponse.name}, ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:
      </p>

      <p>
        ¿Cuál es tu cargo/posición dentro de tu empresa?
      </p>

      <OptionButton 
        category="position" 
        handleChangeValue={handleResponse} 
        value="Board member" 
        isSelected={userResponse.position === "Board member"}
      />

      <OptionButton 
        category="position" 
        handleChangeValue={handleResponse} 
        value="Board member 2" 
        isSelected={userResponse.position === "Board member 2"}
      />

      <OptionButton 
        category="position" 
        handleChangeValue={handleResponse} 
        value="Board member 3" 
        isSelected={userResponse.position === "Board member 3"}
      />

      <OptionButton 
        category="position" 
        handleChangeValue={handleResponse} 
        value="Board member 4" 
        isSelected={userResponse.position === "Board member 4"}
      />
    </div>
  )
}

export default UserPosition