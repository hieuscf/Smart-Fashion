interface Props {
  categories: string[];
}

export default function CategoriesNav({ categories }: Props) {
  return (
    <div className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden lg:flex items-center gap-6 py-3 overflow-x-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap font-medium">
            Danh mục
          </button>

          {categories.map((c, i) => (
            <button
              key={i}
              className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap transition-colors"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
