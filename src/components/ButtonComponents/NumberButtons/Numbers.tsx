import React from 'react';

import NumberButton from './NumberButton';
import { numbers } from '../../../data';

const Numbers = () => {
  return (
    <div>
      {numbers.map(number => <NumberButton text={number} />)}
    </div>
  );
};

export default Numbers;
