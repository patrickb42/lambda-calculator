import React from 'react';
import SpecialButton from './SpecialButton';

import { specials as SpecialSymbols } from '../../../data';

const Specials = () => {
  return (
    <div>
      {SpecialSymbols.map((specialSymbol) => {
        return <SpecialButton text={specialSymbol} />;
      })}
    </div>
  );
};

export default Specials;
