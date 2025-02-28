type InputFieldProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
  };
  
  export const InputField = ({
    label,
    name,
    type = "text",
    placeholder = "Enter your text...",
  }: InputFieldProps) => {
    return (
      <div className="relative space-y-2">
        <label className="block text-md font-medium text-white">{label}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full text-xs py-2 px-3
                       placeholder-black focus:outline-none max-w-md  
                       shadow-lg rounded-lg bg-blue-100 text-black backdrop-blur-lg 
                       border border-white/50"
          required
        />
      </div>
    );
  };