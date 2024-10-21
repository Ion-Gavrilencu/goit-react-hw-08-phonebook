import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { addContact } from '../../services/api';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact({ name, number });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: '0 auto' }}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      <Button type="submit" variant="contained">Add Contact</Button>
    </Box>
  );
}
