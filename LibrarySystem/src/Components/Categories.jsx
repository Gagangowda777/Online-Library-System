import { Link } from "react-router-dom";

function Categories({ categories, activeCategory = null, showAll = true, title = "Categories" }) {
  return (
    <div className="mb-8">
      {title && <h2 className="text-lg font-semibold text-slate-900 mb-4">{title}</h2>}
      <div className="flex flex-wrap gap-3">
        {showAll && (
          <Link
            to="/browsebooks"
            className={`px-4 py-2 rounded-full font-medium transition ${
              !activeCategory
                ? "bg-black text-white"
                : "bg-gray-200 text-slate-900 hover:bg-gray-300"
            }`}
          >
            All
          </Link>
        )}
        {categories.map((category) => (
          <Link
            key={category}
            to={`/browsebooks/${category}`}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 text-slate-900 hover:bg-gray-300"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
