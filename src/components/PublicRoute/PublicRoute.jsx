import { Navigate } from 'react-router-dom';

export default function PublicRoute({ component: Component }) {
  const isAuthenticated = Boolean(localStorage.getItem('token'));
  return !isAuthenticated ? <Component /> : <Navigate to="/contacts" />;
}
