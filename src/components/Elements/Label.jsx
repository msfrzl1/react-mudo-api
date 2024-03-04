const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="font-bold text-xl">
      {children}
    </label>
  );
};

export default Label;
