const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700 font-bold mb-1 mt-2">
      {children}
    </label>
  );
};

export default Label;
