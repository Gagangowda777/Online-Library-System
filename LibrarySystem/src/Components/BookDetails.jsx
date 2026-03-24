import { useParams, Link } from "react-router-dom";
import { bookData } from "../utils/BookData";

function BookDetails() {
  const { id } = useParams();
  const book = bookData.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-red-500 text-lg">Book not found</p>
        <Link to="/browsebooks" className="text-blue-500 hover:underline">
          Back to Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link to="/browsebooks" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Browse Books
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Book Cover */}
        <div className="md:col-span-1">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Book Details */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{book.title}</h1>
          <p className="text-xl text-slate-600 mb-4">by {book.author}</p>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium">
              {book.category}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-slate-600">Published Date</p>
              <p className="text-lg font-semibold text-slate-900">
                {new Date(book.publishedDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-slate-600">Pages</p>
              <p className="text-lg font-semibold text-slate-900">{book.pages}</p>
            </div>
            <div>
              <p className="text-slate-600">Rating</p>
              <p className="text-lg font-semibold text-slate-900">
                {book.rating}/5
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Description</h2>
            <p className="text-slate-700 leading-relaxed mb-8">{book.description}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BookDetails;
