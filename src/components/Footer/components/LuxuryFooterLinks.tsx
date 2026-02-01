import { ChevronRight } from "lucide-react";

interface LinkItem {
  name: string;
  href: string;
}

interface LuxuryFooterLinksProps {
  title: string;
  links: LinkItem[];
}

const LuxuryFooterLinks: React.FC<LuxuryFooterLinksProps> = ({ title, links }) => {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-white font-light text-sm mb-4 tracking-wide">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="text-zinc-400 hover:text-amber-400 transition font-light text-sm flex items-center gap-2 group"
            >
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LuxuryFooterLinks;
