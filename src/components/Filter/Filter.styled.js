import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 180px;
  min-height: 18px;
  border: 1px solid gray;
  border-radius: 3px;
  transition: box-shadow 0.5s ease;

  &:focus {
    box-shadow: 0 0 4px 2px #00ffff;
  }
`;
