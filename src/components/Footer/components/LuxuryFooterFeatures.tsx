import { features } from "../footerData";

const LuxuryFooterFeatures = () => {
  return (
    <div className="border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-light text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-zinc-500 text-xs font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuxuryFooterFeatures;
