
function NavBar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="text-lg font-bold tracking-wider text-slate-900">
          BOOK LIBRARY
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Home
          </a>

          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
            <label htmlFor="browse-book" className="text-sm text-slate-600">
              Browse Book
            </label>
            <input
              id="browse-book"
              type="search"
              placeholder="Search..."
              className="w-48 rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-slate-800 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar