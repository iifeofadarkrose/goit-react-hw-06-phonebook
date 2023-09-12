import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { useEffect } from 'react';
import { useState } from 'react';


const App = () => {
  const [filterList, setFilterList] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formAddContact = ({name, number}) => {
    const contact = {
      id: nanoid(10),
      name: name,
      number: number,
    };

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact with this name is already exists.`);
      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
    console.log('contacts', contacts);
  };

  const handleChangeFilter = evt => {
    setFilterList(evt.currentTarget.value);
  };

  const getFilteredContacts = () => {
    let normalizedFilter = filterList.toLowerCase();
    let filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const visibleContacts = getFilteredContacts();
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Phonebook</h1>

      <ContactForm submit={formAddContact} />

      <h2 className={css.heading}>Contacts</h2>
      <Filter value={filterList} onChange={handleChangeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
