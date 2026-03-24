//Header of the page
function NavBar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="text-lg font-bold tracking-wider text-slate-900">
          BOOK LIBRARY
        </div>

        <div className="flex items-center space-x-6">
          <a href="/"
             className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Home
          </a>

          <a href="/browsebooks"
             className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Browse Books
          </a>

          <div>
            <a href="/Addbook">
              <button className="border-black border p-1 rounded hover:bg-black hover:text-amber-50">Add Book</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar;