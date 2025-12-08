import type { FC, ChangeEvent } from "react";
import { AlertCircle } from "lucide-react";

interface AuthInputProps {
  label: string;
  name: string;
  icon?: FC<{ className?: string }>;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}

const AuthInput: FC<AuthInputProps> = ({
  label,
  name,
  icon: Icon,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-orange-300 mb-2">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${
            Icon ? "pl-12" : "pl-4"
          } pr-4 py-3 bg-white/10 border ${
            error ? "border-red-500" : "border-orange-200/40"
          } rounded-xl text-white placeholder-orange-300/60
          
          focus:border-orange-500 
          focus:ring-2 focus:ring-orange-500/30 
          transition-all`}
        />
      </div>

      {error && (
        <p className="flex items-center gap-1 mt-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" /> {error}
        </p>
      )}
    </div>
  );
};

export default AuthInput;
