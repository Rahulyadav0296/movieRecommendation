import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Error from "./pages/Error/Error";
import Navbar from "./pages/Navbar/Navbar";
const Home = lazy(() => import("./components/Home/Home"));

const RootLayout = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="loading-container">
            <img
              src="https://i.giphy.com/jAYUbVXgESSti.webp"
              alt="Page is Loading"
            />
          </div>
        }
      >
        <Navbar />
        <Outlet />
      </Suspense>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "favourite-movies",
        element: <SavedMovies />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
