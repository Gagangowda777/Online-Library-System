import { Link } from "react-router-dom";
import { bookData } from "../utils/BookData";
import Categories from "./Categories";

function Home() {
  // filtering books with more than 4.4 rating 
  const popularBooks = bookData.filter(book => book.rating > 4.4);
  // mapping books based on the category 
  const categories = [...new Set(bookData.map((book) => book.category))];

  return (
    <div>
      <div className="p-8">
        <h1 className="text-2xl pl-10 pt-5">Welcome to Book Library</h1>
        <p className="text-gray-400 pl-10 ">Discover fiction, science, history, and more</p>
      </div>
      {/* categories component */}
        <div className="pl-10 pr-10">
          <Categories categories={categories} showAll={false} title="Categories" />
        </div>

        <p className="text-xl pl-10 pt-10 pb-4 text-gray-600">Popular Books</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-10 pr-10 pb-10">
          {popularBooks.map(book => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl ">
              <img src={book.coverImage} alt={book.title} className="w-full h-56 sm:h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
                <p className="text-gray-500 text-sm">{book.category}</p>
                <p className="text-gray-700 text-sm mt-2 line-clamp-2">{book.description}</p>
                  <span className="text-gray-500 text-sm">rating {book.rating}</span>
                <div className="flex justify-between items-center mt-4">
                  {/* dynamic routing to each book */}
                  <Link
                    to={`/book/${book.id}`}
                    className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-slate-800 transition font-medium">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Home