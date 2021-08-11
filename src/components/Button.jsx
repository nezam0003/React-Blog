import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return <ButtonContainer>{text}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  outline: none;
  border: none;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  background-color: #0d6efd;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 0.375rem 0.95rem;
  font-size: 1rem;
  border-radius: 1.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
`;

export default Button;
