import { useParams, useNavigate } from "react-router-dom";
import DynamicForm from "../components/DynamicForm";
import formConfig from "../constants/formconfigs";

const AddPage = () => {
  const { configKey } = useParams(); 
  const navigate = useNavigate();

  const config = formConfig[configKey];

  if (!config) {
    return <div>Invalid Page Configuration</div>;
  }

  return (
    <DynamicForm
      configKey={configKey}
      onBack={() => navigate(config.backRoute || "/")}
    />
  );  
};

export default AddPage;
