import styled from 'styled-components';

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  margin-bottom: 30px;
  border: 2px solid gray;
  border-radius: 4px;
  font-weight: 600;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 200px;
  min-height: 20px;
  border: 1px solid gray;
  border-radius: 3px;
  transition: box-shadow 0.5s ease;

  &:focus {
    box-shadow: 0 0 4px 2px #00ffff;
  }
`;

export const SubmitButton = styled.button`
  width: 120px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #00ffff;
  transition: scale 0.5s ease;

  &:hover,
  &:focus {
    scale: 1.25;
    cursor: pointer;
  }
`;
