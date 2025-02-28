import { useState } from "react";

type PasswordFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
};

export const PasswordField = ({
  label,
  name,
  placeholder = "Enter your password...",
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative space-y-2">
      <label className="block text-md font-medium text-white">{label}</label>
      <div className="relative space-y-5">
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full text-xs py-2 px-3
                     placeholder-black focus:outline-none max-w-md  
                     shadow-lg rounded-lg bg-blue-100 text-black backdrop-blur-lg 
                     border border-white/50"
          required
        />
        {/* Custom Checkbox */}
        <div className="flex items-center mt-2 gap-2">
          <div
            className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center transition-all
                        ${
                          showPassword
                            ? "bg-gradient-to-r from-[#01ECA9] to-[#3757F8] "
                            : "border-white"
                        }`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword && (
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </div>
          <span className="text-white text-sm cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            Show Password
          </span>
        </div>
      </div>
    </div>
  );
};