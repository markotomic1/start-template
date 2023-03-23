import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  //cant acccess home if not logged in
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />;
    }
    return children;
  };
  //if user is logged cant go to login or register page
  const ProtectedRouteUser = ({ children }) => {
    if (currentUser) {
      return <Navigate to='/' />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <ProtectedRouteUser>
          <Login />
        </ProtectedRouteUser>
      ),
    },
    {
      path: "/register",
      element: (
        <ProtectedRouteUser>
          <Register />
        </ProtectedRouteUser>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
