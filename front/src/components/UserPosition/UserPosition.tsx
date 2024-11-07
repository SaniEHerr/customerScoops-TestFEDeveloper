import { useFormContext } from "../../contexts/FormContext";
import OptionButton from "../OptionButton/OptionButton";
import { UserPositionContainer } from "./styled.components";

// List of positions to be displayed as options
const positions = [
  "Board member",
  "C-level",
  "Gerente",
  "Subgerente",
  "Jefe área",
  "Lider de área",
  "Ejecutivo / Analista",
  "Otro",
];

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