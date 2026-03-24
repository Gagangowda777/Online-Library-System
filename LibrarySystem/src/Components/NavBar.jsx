import { useState } from "react";

//Header of the page
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="text-lg font-bold tracking-wider text-slate-900">BOOK LIBRARY</div>

        <button
          className="md:hidden rounded-md p-2 text-slate-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <div className="mt-3 flex flex-col items-start gap-2 md:mt-0 md:flex-row md:items-center md:gap-6">
            <a href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Home
            </a>
            <a href="/browsebooks" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Browse Books
            </a>
            <a href="/Addbook" className="w-full md:w-auto">
              <button className="w-full border-black border px-3 py-1 rounded text-center hover:bg-black hover:text-amber-50 md:px-2 md:py-1">
                Add Book
              </button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;