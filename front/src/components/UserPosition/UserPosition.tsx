import { positions } from "../../constants/positions";
import { useFormContext } from "../../contexts/FormContext";
import OptionButton from "../OptionButton/OptionButton";
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
        {/* Mapping through the positions array to create an OptionButton for each position */}
        {positions.map((position) => (
          <OptionButton
            key={position}
            category="position"
            handleChangeValue={handleResponse}
            value={position}
            isSelected={userResponse.position === position}
          />
        ))}
      </div>
    </UserPositionContainer>
  );
};

export default UserPosition;