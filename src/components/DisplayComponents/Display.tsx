import React from 'react';

import './Display.scss';

interface DisplayProps {
  text?: string;
}
const Display = ({ text = '0' }: DisplayProps) => {
  return <div className="display">{text}</div>;
};

export default Display;
