import { industries } from "../../constants/industries";
import { useFormContext } from "../../contexts/FormContext";
import OptionButton from "../OptionButton/OptionButton";
import { IndustryContainer } from "./styled.components";

const Industry = () => {
  const { userResponse, handleResponse } = useFormContext();
  
  return (
    <IndustryContainer>
      <div className="description-container">
        <span>Ahora te vamos a sorprender...</span>
        <p>¿A cuál industria pertenece tu empresa?</p>
      </div>

      <div className="industries-grid">
        {/* Mapping through industries to create OptionButton for each industry */}
        {industries.map((industry) => (
          <OptionButton
            key={industry}
            category="industry"
            handleChangeValue={handleResponse}
            value={industry}
            isSelected={userResponse.industry === industry}
            isFullWidth={industry === "Otra"}
          />
        ))}
      </div>
    </IndustryContainer>
  )
}

export default Industry