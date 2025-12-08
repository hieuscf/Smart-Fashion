import { Search } from "lucide-react";
import type { Dispatch, SetStateAction, KeyboardEvent } from "react";

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  handleKeyPress,
  handleSearch,
}: Props) {
  return (
    <div className="flex-1 max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Tìm kiếm sản phẩm, danh mục..."
          className="w-full pl-5 pr-12 py-3 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
