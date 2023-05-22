import React from "react";
import styled from "styled-components";

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const RadioButtonInput = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 50%;
  cursor: pointer;
  &:checked {
    background-color: ${(props) => props.theme.colors.white};
  }
  &:checked::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    margin: 3px;
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 50%;
  }
`;

const RadioButtonLabel = styled.label`
  margin-left: 10px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 25px;
`;

const RadioButton = ({ label, id, value, checked, onChange }) => {
  return (
    <RadioButtonWrapper>
      <RadioButtonInput
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <RadioButtonLabel for={id}>{label}</RadioButtonLabel>
    </RadioButtonWrapper>
  );
};

export default RadioButton;
