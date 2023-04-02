import React from 'react';
import PropTypes from 'prop-types';
import { Item, Element, Button } from './ContactItem.styled';

export const ContactItem = ({ item: { id, name, number }, onDelete }) => {
  const handleDelete = e => {
    onDelete(e.target.id);
  };

  return (
    <Item>
      <Element>{name}:</Element>
      <Element>{number}</Element>
      <Button id={id} onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
