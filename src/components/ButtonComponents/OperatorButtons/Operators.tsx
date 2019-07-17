import React from 'react';
import OperatorButton from './OperatorButton';

import { operators } from '../../../data';
import './Operators.scss'

const Operators = () => {
  return (
    <div className="operators">
      {operators.map(operator => <OperatorButton key={operator.char} pair={operator} />)}
    </div>
  );
};

export default Operators;
