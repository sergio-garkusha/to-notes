import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import AuthorsPage from "./pages/AuthorsPage";
import NotFoundPage from "./pages/NotFoundPage";
import NotePage from "./pages/NotePage";
import EditNotePage from "./pages/EditNotePage";

import { AuthProvider } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/authors", element: <AuthorsPage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      // Protected Routes
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notes/:id",
        element: (
          <ProtectedRoute>
            <NotePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notes/:id/edit",
        element: (
          <ProtectedRoute>
            <EditNotePage />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <RouterProvider router={router} />
      </NotesProvider>
    </AuthProvider>
  );
}
