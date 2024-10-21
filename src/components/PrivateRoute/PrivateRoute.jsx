import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component }) {
  const isAuthenticated = Boolean(localStorage.getItem('token'));
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}
