import { crms } from "../../constants/crms";
import { useFormContext } from "../../contexts/FormContext";
import OptionButton from "../OptionButton/OptionButton";
import { CrmContainer } from "./styled.components";

const Crm = () => {
  const { userResponse, handleResponse } = useFormContext();
  
  return (
    <CrmContainer>
      <p>
        ¿Cuál CRM están utilizando en tu empresa? CRM:
      </p>

      <div className="crms-grid">
        {/* Mapping through crms to create OptionButton for each CRM */}
        {crms.map((crm) => (
          <OptionButton
            key={crm}
            category="crm"
            handleChangeValue={handleResponse}
            value={crm}
            isSelected={userResponse.crm === crm}
            isFullWidth={crm === "No tengo CRM"}
          />
        ))}
      </div>

    </CrmContainer>
  )
}

export default Crm