import { useFormContext } from "../../contexts/FormContext";
import OptionButton from "../OptionButton/OptionButton"
import { UserPositionContainer } from "./styled.components";

const UserPosition = () => {
  const { userResponse, handleResponse } = useFormContext();
  
  return (
    <UserPositionContainer>
      <p>
        <span>Genial {userResponse.name}</span>, ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:
      </p>

      <p>
        ¿Cuál es tu cargo/posición dentro de tu empresa?
      </p>

      <div className="positions-grid">
        <OptionButton 
          category="position"
          handleChangeValue={handleResponse}
          value="Board member" 
          isSelected={userResponse.position === "Board member"}
        />

        <OptionButton 
          category="position" 
          handleChangeValue={handleResponse} 
          value="C-level" 
          isSelected={userResponse.position === "C-level"}
        />

        <OptionButton 
          category="position" 
          handleChangeValue={handleResponse} 
          value="Gerente" 
          isSelected={userResponse.position === "Gerente"}
        />

        <OptionButton 
          category="position" 
          handleChangeValue={handleResponse} 
          value="Subgerente" 
          isSelected={userResponse.position === "Subgerente"}
        />

        <OptionButton 
          category="position" 
          handleChangeValue={handleResponse} 
          value="Jefe área" 
          isSelected={userResponse.position === "Jefe área"}
        />

        <OptionButton 
          category="position" 
          handleChangeValue={handleResponse} 
          value="Lider de área" 
          isSelected={userResponse.position === "Lider de área"}
        />

        <OptionButton 
          category="position" 
          handleChangeValue={handleResponse} 
          value="Ejecutivo / Analista" 
          isSelected={userResponse.position === "Ejecutivo / Analista"}
        />

        <OptionButton 
          category="position" 
          handleChangeValue={handleResponse} 
          value="Otro" 
          isSelected={userResponse.position === "Otro"}
        />
      </div>

    </UserPositionContainer>
  )
}

export default UserPosition