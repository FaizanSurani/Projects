import useSelector from "react-redux";

export default function PrivateRoute({ isAdmin }) {
  const { isAdmin, isAuthenticated } = useSelector();
}
