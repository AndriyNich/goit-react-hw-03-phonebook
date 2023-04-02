import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
`;

export const Element = styled.span`
  display: block;
`;

export const Button = styled.button`
  display: block;
  padding: 2px 8px;

  border: 1px solid #000;
  border-radius: 4px;

  cursor: pointer;

  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;
