const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onChange} className="w-full border p-2 my-1 placeholder: text-slate-500" />
  );
};

export default Input;
