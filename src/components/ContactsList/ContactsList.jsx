import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsListWraper, ContactsListItem } from './ContactsList.styled';
import { ContactItem } from './ContactItem/ContactItem';

export class ContactsList extends Component {
  getFilteredContactList({ contacts, filter }) {
    const filterL = filter.toLowerCase();
    return contacts.filter(elem => elem.name.toLowerCase().includes(filterL));
  }

  render() {
    const { state, onDelete } = this.props;
    return (
      <ContactsListWraper>
        {this.getFilteredContactList(state).map(elem => {
          return (
            <ContactsListItem key={elem.id}>
              <ContactItem item={elem} onDelete={onDelete} />
            </ContactsListItem>
          );
        })}
      </ContactsListWraper>
    );
  }
}

ContactsList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
};
