import React, { PropTypes } from 'react';
import ProgressBar from 'ProgressBar/client';
import styles from '../styles/DimImage';

const options = {
  trailColor: '#eee',
  color: '#888',
  strokeWidth: 3,
  trailWidth: 1,
  svgStyle: { width: '100%', height: '100%' },
};

const DimImage = ({ url }) => {
  return (
    <div className={styles.upload}>
      <img src={url} alt="" className={styles.image} />
      <div className={styles.dimmer} />
      <ProgressBar.Line
        progress={0.3}
        className={styles.progress}
        options={options}
        initialAnimate
      />
    </div>
  );
};

DimImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DimImage;
