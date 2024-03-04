import Input from "./Input";
import Label from "./Label";

const FormInput = ({ label, name, type, placeholder }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
