import { AppBar, Toolbar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={NavLink} to="/register">Register</Button>
        <Button color="inherit" component={NavLink} to="/login">Login</Button>
        <Button color="inherit" component={NavLink} to="/contacts">Contacts</Button>
      </Toolbar>
    </AppBar>
  );
}
