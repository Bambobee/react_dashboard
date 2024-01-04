import React from 'react';
import { First } from './first';
import { Second } from './second';
import  {Third} from './third';

export const Sidebar = ({close}) => {
  

  return (
    <div className={close ? "sidebar close":"sidebar "}>
        
      <First />

      <Second />

      <Third />
    </div>
  );
};
