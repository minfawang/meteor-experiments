import React, { PropTypes } from 'react';
import styles from '../styles/ProgressBar';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class ProgressBar extends React.Component {
  static propTypes = {
    percent: PropTypes.number,
    className: PropTypes.string,
    barColor: PropTypes.string,
    hidePercent: PropTypes.bool,
  };

  static defaultProps = {
    percent: 0,
    barColor: '#666',
    hidePercent: false,
  };

  render() {
    const {
      className, percent, barColor,
      ...containerProps,
    } = this.props;
    const containerClass = cx('container', className);

    const barStyle = {
      width: `${percent}%`,
      backgroundColor: barColor,
    };

    return (
      <div className={containerClass} {...containerProps}>
        <div style={barStyle} />
        <div className={cx('percentContainer')}>
          {`${percent} %`}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
