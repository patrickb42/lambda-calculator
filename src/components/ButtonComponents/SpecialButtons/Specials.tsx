import React from 'react';
import SpecialButton from './SpecialButton';

import { specials as SpecialSymbols } from '../../../data';
import './Specials.scss';

const Specials = () => {
  return (
    <div className="specials">
      {SpecialSymbols.map((specialSymbol) => {
        return <SpecialButton key={specialSymbol} text={specialSymbol} />;
      })}
    </div>
  );
};

export default Specials;
