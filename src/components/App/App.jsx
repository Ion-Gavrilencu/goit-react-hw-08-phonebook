import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Register from 'components/Register/Register';
import Login from 'components/Login/Login';
import Contacts from 'components/ContactList/ContactList';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import '../../../src/App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/register" element={<PublicRoute component={Register} />} />
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route path="/contacts" element={<PrivateRoute component={Contacts} />} />
      </Routes>
    </div>
  );
}

export default App;
