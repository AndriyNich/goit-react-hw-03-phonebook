import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FieldData,
  ErrorMessage as FieldError,
} from 'formik';

export const Form = styled(FormikForm)`
  padding: 16px;
  width: 300px;

  font-size: 12px;

  border: 1px solid #000;
  border-radius: 5px;
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 24px;
`;

export const Field = styled(FieldData)`
  display: block;
  margin-top: 8px;
  padding: 4px 8px;
`;

export const ErrorMessage = styled(FieldError)`
  display: block;
  color: red;
`;

export const Button = styled.button`
  display: block;
  padding: 8px 16px;

  cursor: pointer;

  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;
