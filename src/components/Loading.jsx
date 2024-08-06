import React from 'react';
import { Bars } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Bars
        height={80}
        width={80}
        color="blue"
        ariaLabel="loading"
      />
    </div>
  );
};