import React from 'react';
import PropTypes from 'prop-types';
import { FieldInput } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const handleChangeFilter = e => {
    onChange(e.target.value);
  };

  return (
    <label htmlFor="">
      Find contacts by name
      <FieldInput type="text" onChange={handleChangeFilter} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
