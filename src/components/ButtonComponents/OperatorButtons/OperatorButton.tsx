import React from "react";

interface OperatorButtonProps {
  pair: {char: string, value: string};
}
const OperatorButton = ({ pair }: OperatorButtonProps) => {
  return (
    <button>{pair.char}</button>
  );
};

export default OperatorButton;
