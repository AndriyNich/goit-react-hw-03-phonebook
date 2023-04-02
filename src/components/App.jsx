import React, { Component } from 'react';
import { AppWraper, MainTitle, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

const LS_LIST = 'contactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    let contacts = localStorage.getItem(LS_LIST);
    if (contacts) {
      try {
        contacts = JSON.parse(contacts);
        if (Array.isArray(contacts)) {
          this.setState({ contacts });
        }
      } catch {}
    }
  }

  componentDidUpdate() {
    localStorage.setItem(LS_LIST, JSON.stringify(this.state.contacts));
  }

  contains = ({ name }) => {
    return this.state.contacts.filter(elem => elem.name === name).length;
  };

  handleAddContact = newRecord => {
    if (this.contains(newRecord)) {
      alert(`${newRecord.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newRecord] };
    });
  };

  handelChangeFilter = filter => {
    this.setState({ filter: filter });
  };

  handleDeleteContact = recordId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== recordId),
    }));
  };

  render() {
    return (
      <AppWraper>
        <MainTitle>Phone book</MainTitle>
        <ContactForm onSave={this.handleAddContact} />
        <Title>Contacts</Title>
        <Filter onChange={this.handelChangeFilter} />
        <ContactsList state={this.state} onDelete={this.handleDeleteContact} />
      </AppWraper>
    );
  }
}
