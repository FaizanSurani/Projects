import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../components/UserContextReducer";
import { useCart } from "../components/ContextReducer";

export default function PrivateRoute({ isAdmin, ...props }) {
  const user = useUser();
  const cart = useCart();
  const isAuthenticated = cart.length > 0;

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  if (isAuthenticated) {
    if (isAdmin === true && user.role !== "admin") {
      return <Navigate to="/" />;
    }
    return <Outlet {...props} />;
  }
}
