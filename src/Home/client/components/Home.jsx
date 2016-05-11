import React from 'react';
import ProgressBar from 'ProgressBar/client';
import styles from '../styles/Home';

const circleOptions = {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#00c5cd',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null,
};

const option2 = {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page of Experiments</h1>
        <ProgressBar percent={50} />
        <ProgressBar.Line
          progress={0.3}
          className={styles.progress}
          text={'hello'}
        />
        <ProgressBar.Circle
          progress={0.76}
          className={styles.circle}
          text={'76%'}
          initialAnimate
          options={circleOptions}
        />

        <ProgressBar.Circle
          initialAnimate
          progress={1}
          text={'100%'}
          className={styles.circle}
          options={option2}
        />

        <div>Still working?</div>
      </div>
    );
  }
}

export default Home;
