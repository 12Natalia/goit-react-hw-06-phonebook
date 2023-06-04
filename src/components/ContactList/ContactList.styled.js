import styled from 'styled-components';

export const Message = styled.p`
  display: inline-block;
  min-width: 230px;
  color: red;
  font-weight: 600;
`;

export const List = styled.ul`
  padding-left: 30px;
  font-weight: 600;
`;

export const Item = styled.li`
  padding-left: 5px;
  font-size: 17px;
  color: #00ffff;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Contact = styled.p`
  display: inline-block;
  min-width: 230px;
  color: black;
`;

export const Button = styled.button`
  width: 70px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #00ffff;
  font-weight: 600;
  transition: scale 0.5s ease;

  &:hover,
  &:focus {
    scale: 1.25;
    cursor: pointer;
  }
`;
