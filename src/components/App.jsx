import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.heading}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
