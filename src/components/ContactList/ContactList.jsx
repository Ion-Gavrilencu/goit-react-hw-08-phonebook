import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { getContacts, deleteContact } from '../../services/api';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getContacts();
      setContacts(data);
    })();
  }, []);

  const handleDelete = async (id) => {
    await deleteContact(id);
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ListItemText primary={`${contact.name}: ${contact.number}`} />
          <Button variant="outlined" color="error" onClick={() => handleDelete(contact.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
}
