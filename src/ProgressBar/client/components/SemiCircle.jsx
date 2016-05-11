import React from 'react';
import ProgressBar from 'progressbar.js';
import Shape from './Shape';

const SemiCircle = props => {
  return (
    <Shape
      {...props}
      ShapeClass={ProgressBar.SemiCircle}
    />
  );
};

export default SemiCircle;
