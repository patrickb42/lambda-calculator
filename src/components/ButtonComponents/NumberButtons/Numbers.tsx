import React from 'react';

import NumberButton from './NumberButton';
import { numbers } from '../../../data';
import './Numbers.scss'

const Numbers = () => {
  return (
    <div className="numbers">
      {numbers.map(number => <NumberButton text={number} />)}
    </div>
  );
};

export default Numbers;
