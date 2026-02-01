import { ChevronRight } from "lucide-react";

export default function FooterLinks({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="font-bold text-gray-800 mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((text, idx) => (
          <li key={idx}>
            <a className="text-gray-600 hover:text-orange-500 flex items-center gap-1 group">
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
