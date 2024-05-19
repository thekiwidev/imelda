const InputFlex: React.FC<{ children: React.ReactNode[] | JSX.Element }> = ({
  children,
}) => {
  return (
    <div className="grid max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      {children}
    </div>
  );
};

export default InputFlex;
