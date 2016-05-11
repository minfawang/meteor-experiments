import React from 'react';
import ProgressBar from 'progressbar.js';
import Shape from './Shape';

const Circle = props => {
  return (
    <Shape
      {...props}
      ShapeClass={ProgressBar.Circle}
    />
  );
};

export default Circle;
