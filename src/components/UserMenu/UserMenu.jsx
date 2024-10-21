import { Button, Typography, Box } from '@mui/material';
import { logoutUser } from '../../services/api';

export default function UserMenu() {
  const email = localStorage.getItem('email');

  const handleLogout = () => {
    logoutUser();
    window.location.href = '/login';
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography>{email}</Typography>
      <Button variant="contained" onClick={handleLogout}>Logout</Button>
    </Box>
  );
}
