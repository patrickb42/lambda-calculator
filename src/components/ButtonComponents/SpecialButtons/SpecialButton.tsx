import React from 'react';

interface SpecialButtonProps {
  text: string;
}
const SpecialButton = ({ text }: SpecialButtonProps) => {
  return (
    <button>{text}</button>
  );
};

export default SpecialButton;
