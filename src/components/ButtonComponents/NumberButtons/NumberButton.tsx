import React from 'react';

interface NumberButtonProps {
  text: string;
}
const NumberButton = ({ text }: NumberButtonProps) => {
  return (
    <button>{text}</button>
  );
};

export default NumberButton;
