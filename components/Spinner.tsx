import React from 'react';

export const Loader: React.FC<{ show: boolean }> = ({ show }) => {
  return show ? <div className="loader"></div> : null;
};
