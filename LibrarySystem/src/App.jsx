import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import BrowseBooks from "./Components/BrowseBooks";
import BookDetails from "./Components/BookDetails";
import ErrorPage from "./Components/ErrorPage";
import NavBar from "./Components/NavBar";
import AddBook from "./Components/AddBook";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "browsebooks",
        element: <BrowseBooks />,
      },
      {
        path: "Addbook",
        element: <AddBook/>,
      },
      {
        path: "browsebooks/:category",
        element: <BrowseBooks />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;