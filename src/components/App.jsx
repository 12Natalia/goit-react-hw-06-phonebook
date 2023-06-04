import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FirstHeader, SecondHeader, Section } from './App.styled';

export const App = () => {
  return (
    <Section>
      <FirstHeader>Phonebook</FirstHeader>
      <ContactForm />
      <SecondHeader>Contacts</SecondHeader>
      <Filter />
      <ContactList />
      <ToastContainer position="top-left" />
    </Section>
  );
};
