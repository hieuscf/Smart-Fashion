import { type FC, type ChangeEvent, useState } from "react";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";

interface AuthPasswordInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}

const AuthPasswordInput: FC<AuthPasswordInputProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-sm font-medium text-orange-300 mb-2">
        {label}
      </label>

      <div className="relative">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-12 pr-12 py-3 bg-white/10 border ${
            error ? "border-red-500" : "border-orange-200/40"
          } rounded-xl text-white placeholder-orange-300/60
          focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 
          transition-all`}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-300 transition-colors"
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>

      {error && (
        <p className="flex items-center gap-1 mt-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" /> {error}
        </p>
      )}
    </div>
  );
};

export default AuthPasswordInput;
