import React from 'react';
import OperatorButton from './OperatorButton';

import { operators } from '../../../data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(operator => <OperatorButton pair={operator} />)}
    </div>
  );
};

export default Operators;
