type InputFieldProps = {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  isTextarea?: boolean;
  rows?: number;
};

const InputField = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextarea = false,
  rows = 3,
}: InputFieldProps) => {
  const baseClasses =
    "lg:w-[35%] sm:w-[50%] w-[90%] max-w-[400px]  p-2 text-base bg-transparent border-l-2 border-b-2 border-black/40 transition-all placeholder:text-Black/60 placeholder:uppercase placeholder:text-xs placeholder:font-bold placeholder:tracking-wider focus:w-[100%] hover:bg-White/50 focus:bg-White/50 shadow-sm hover:shadow focus:shadow outline-none";

  if (isTextarea) {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        className={baseClasses}
        value={value}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={baseClasses}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
