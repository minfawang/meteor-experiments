import React from 'react';
import ProgressBar from 'progressbar.js';
import Shape from './Shape';

const Line = props => {
  return (
    <Shape
      {...props}
      ShapeClass={ProgressBar.Line}
    />
  );
};

export default Line;
