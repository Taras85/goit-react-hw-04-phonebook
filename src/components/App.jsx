import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.some(item => (item.name).toLowerCase()  === (contact.name).toLowerCase())) {
     
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    }
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };


  componentDidMount(){
    const getContact=localStorage.getItem('contact')
    const parsetContacts= JSON.parse(getContact);
    if(parsetContacts){
    this.setState({contacts: parsetContacts})
    }
  }
  
  componentDidUpdate(prevProps, prevState ){
 if (this.state.contacts !== prevState.contacts){
  localStorage.setItem('contact', JSON.stringify(this.state.contacts))
    }
  }


  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={s.appContainer}>
        <h1 className={s.titlePhonebook}>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2 className={s.titlePhonebook}>Contacts</h2>
        <Filter
          onChangeFilter={this.onChangeFilter}
          value={this.state.filter}
        />
        <ContactList
          // id={this.id}
          onDeleteContact={this.onDeleteContact}
          contacts={filteredContacts}
        />
      </div>
    );
  }
}