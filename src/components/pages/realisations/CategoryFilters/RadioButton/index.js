import React from "react";
import styled from "styled-components";

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const RadioButtonInput = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 50%;
  cursor: pointer;
  &:checked {
    background-color: ${(props) => props.theme.colors.white};
  }
  &:checked::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    margin: 4px;
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

const RadioButton = ({ category, onChange, selectedValue }) => {
  return (
    <RadioButtonWrapper>
      <RadioButtonInput
        type="radio"
        id={category}
        value={category}
        checked={selectedValue === category}
        onChange={onChange}
      />

      <RadioButtonLabel for={category}>{category}</RadioButtonLabel>
    </RadioButtonWrapper>
  );
};

export default RadioButton;
