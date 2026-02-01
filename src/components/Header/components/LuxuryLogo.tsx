import { Crown } from "lucide-react";

interface LuxuryLogoProps {
  isMobile?: boolean;
}

const LuxuryLogo: React.FC<LuxuryLogoProps> = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-800">
        <Crown className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
        <div>
          <h2 className="text-xl font-serif font-light text-white tracking-wider">
            ELÉGANCE
          </h2>
          <p className="text-[10px] text-amber-400/80 tracking-widest font-light">
            HAUTE COUTURE
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <a href="/" className="flex items-center gap-3 group">
        <div className="relative">
          <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full group-hover:bg-amber-400/30 transition"></div>
          <Crown
            className="w-8 h-8 text-amber-400 relative"
            strokeWidth={1.5}
          />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-2xl font-serif font-light text-white tracking-wider">
            ELÉGANCE
          </h1>
          <p className="text-[10px] text-amber-400/80 tracking-widest font-light -mt-1">
            HAUTE COUTURE
          </p>
        </div>
      </a>
    </div>
  );
};

export default LuxuryLogo;
