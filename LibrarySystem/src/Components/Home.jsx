import NavBar from "./NavBar";
import { bookData } from "../utils/BookData";

function Home() {
  // Filtering books with rating above 4.4
  const popularBooks = bookData.filter(book => book.rating > 4.4);

  return (
    <div>
        <NavBar/>
        
        <h1 className="text-2xl pl-10 pt-5">Welcome to Book Library</h1>
        <p className="text-gray-400 pl-10 ">Discover fiction, science, history, and more</p>

        <p className="text-xl pl-10 pt-10 pb-4 text-gray-600">Categories</p>
        <ul className="flex  pl-15 pt-2 gap-4">
            <li className="border-gray-600 rounded-3xl border-2 p-2">Fiction</li>
            <li className="border-gray-600 rounded-3xl border-2 p-2">Non-Fiction</li>
            <li className="border-gray-600 rounded-3xl border-2 p-2">Sci-Fi</li>
            <li className="border-gray-600 rounded-3xl border-2 p-2">Fantasy</li>
            <li className="border-gray-600 rounded-3xl border-2 p-2">Comic</li>
            <li className="border-gray-600 rounded-3xl border-2 p-2">History</li>
            <li className="border-gray-600 rounded-3xl border-2 p-2">Thriller</li>
        </ul>

        <p className="text-xl pl-10 pt-10 pb-4 text-gray-600">Popular Books</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-10 pr-10 pb-10">
          {popularBooks.map(book => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
                <p className="text-gray-500 text-sm">{book.category}</p>
                <p className="text-gray-700 text-sm mt-2 line-clamp-2">{book.description}</p>
                  <span className="text-gray-500 text-sm">rating {book.rating}</span>
                <div className="flex justify-between items-center mt-4">
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Home;