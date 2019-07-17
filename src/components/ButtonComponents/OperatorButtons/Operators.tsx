import React from 'react';
import OperatorButton from './OperatorButton';

import { operators } from '../../../data';

const Operators = () => {
  return (
    <div>
      {operators.map(operator => <OperatorButton key={operator.char} pair={operator} />)}
    </div>
  );
};

export default Operators;
