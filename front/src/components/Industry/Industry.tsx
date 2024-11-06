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
        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Tecnología"
          isSelected={userResponse.industry === "Tecnología"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Software"
          isSelected={userResponse.industry === "Software"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Servicios"
          isSelected={userResponse.industry === "Servicios"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Financiera"
          isSelected={userResponse.industry === "Financiera"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Telecomunicaciones"
          isSelected={userResponse.industry === "Telecomunicaciones"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value=" Producción /Fabricación"
          isSelected={userResponse.industry === " Producción /Fabricación"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Logística"
          isSelected={userResponse.industry === "Logística"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Consumo Masivo"
          isSelected={userResponse.industry === "Consumo Masivo"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Mayorista"
          isSelected={userResponse.industry === "Mayorista"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Retail"
          isSelected={userResponse.industry === "Retail"}
        />

        <OptionButton
          category="industry"
          handleChangeValue={handleResponse}
          value="Otra"
          isSelected={userResponse.industry === "Otra"}
          isFullWidth={true}
        />
      </div>

    </IndustryContainer>
  )
}

export default Industry