import type { FC } from "react";
import { Sparkles } from "lucide-react";

interface BrandLogoProps {
  title?: string;
  subtitle?: string;
}

const BrandLogo: FC<BrandLogoProps> = ({
  title = "ShopHub Pro",
  subtitle = "Nền tảng thương mại điện tử thông minh",
}) => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl blur-lg opacity-50"></div>

          <div className="relative bg-linear-to-r from-orange-600 to-pink-600 p-3 rounded-2xl">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          {title}
        </h1>
      </div>

      <p className="text-gray-400 text-lg">{subtitle}</p>
    </div>
  );
};

export default BrandLogo;
