const InputsWrapper: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      {children}
    </div>
  );
};

export default InputsWrapper;
