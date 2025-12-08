import type { FC, ReactNode } from "react";

interface SocialButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

const SocialButton: FC<SocialButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group text-white"
    >
      <span className="w-5 h-5 group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
};

export default SocialButton;
