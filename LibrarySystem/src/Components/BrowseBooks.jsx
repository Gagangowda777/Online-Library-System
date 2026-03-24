import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Categories from "./Categories";

function BrowseBooks() {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const books = useSelector((state) => state.books.books);

  // Get unique categories
  const categories = [...new Set(books.map((book) => book.category))];


  const filteredBooks = useMemo(() => {
    let filtered = books;


    if (category) {
      filtered = filtered.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [category, searchQuery, books]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Browse Books</h1>

    
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Categories categories={categories} activeCategory={category} showAll={true} title="Categories" />

      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          {category ? `${category}` : "All Books"} ({filteredBooks.length})
        </h2>

        {filteredBooks.length === 0 ? (
          <p className="text-center text-slate-600 py-12">No books found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-50 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                  <p className="text-gray-600 text-sm">{book.author}</p>
                  <p className="text-gray-500 text-sm">{book.category}</p>
                  <p className="text-gray-700 text-sm mt-2 line-clamp-2">{book.description}</p>
                  <span className="text-gray-500 text-sm">rating {book.rating}</span>
                  <div className="flex justify-between items-center mt-4">
                    <Link
                      to={`/book/${book.id}`}
                      className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-slate-800 transition font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks